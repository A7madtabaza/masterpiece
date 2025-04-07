const Article = require("../models/Article");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

exports.uploadArticleImage = upload.single("image");

exports.addArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const image = `/uploads/${req.file.filename}`;
    const article = new Article({ title, content, image });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    console.error("Error in addArticle:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
