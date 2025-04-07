import React, { useState } from "react";
import axios from "axios";

function AddArticle() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:5000/api/articles/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("تم إضافة المقالة بنجاح");
      setFormData({ title: "", content: "", image: null });
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "حدث خطأ أثناء إضافة المقالة");
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">إضافة مقالة</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">عنوان المقالة</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">المحتوى</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">صورة المقالة</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          إضافة
        </button>
      </form>
    </div>
  );
}

export default AddArticle;
