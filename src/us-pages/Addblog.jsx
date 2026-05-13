import { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("Admin");
  const [slug, setSlug] = useState("");
  const [message, setMessage] = useState("");

  // Optional: auto-generate slug from title
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
      image,
      author,
      slug: slug || generateSlug(title),
    };

    try {
      const res = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Blog added successfully!");
        // Reset form
        setTitle("");
        setContent("");
        setImage("");
        setSlug("");
      } else {
        setMessage(data.message || "Failed to add blog.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error: Could not connect to server.");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "50px auto" }}>
      <h2>Add Blog</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <textarea
            placeholder="Content (HTML allowed)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={6}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            placeholder="Slug (optional)"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
