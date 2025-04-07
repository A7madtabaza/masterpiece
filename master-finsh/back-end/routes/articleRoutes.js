const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.post(
  "/add",
  articleController.uploadArticleImage,
  articleController.addArticle
);
router.get("/", articleController.getArticles);

module.exports = router;
