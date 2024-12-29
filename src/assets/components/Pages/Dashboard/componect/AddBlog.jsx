import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://wedding-server-side.vercel.app/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Blog added successfully:", result);
        Swal.fire({
          icon: "success",
          title: "Blog added successfully!",
          text: "Your blog post has been added.",
        });
        setBlog({ title: "", description: "", imageUrl: "" }); // Reset form
      } else {
        console.error("Failed to add blog");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to add the blog. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      Swal.fire({
        icon: "error",
        title: "An error occurred",
        text: "There was an error adding the blog. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add a New Blog Post</h2>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:[w-80%] bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Blog Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-medium mb-2"
          >
            Description:
          </label>
          <textarea
            id="content"
            name="description"
            value={blog.description}
            onChange={handleChange}
            required
            className="w-full  h-40 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-gray-700 font-medium mb-2"
          >
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={blog.imageUrl}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
