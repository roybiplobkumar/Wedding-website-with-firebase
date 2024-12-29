import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://wedding-server-side.vercel.app/blog/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog data");
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        Swal.fire("Error", "Failed to fetch blog data", "error");
      }
    };
    fetchBlog();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://wedding-server-side.vercel.app/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });

      if (!response.ok) throw new Error("Failed to update blog");

      Swal.fire({
        title: "Success!",
        text: "Blog updated successfully.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => navigate("/dashboard/update-blog"), 2000);
    } catch (err) {
      Swal.fire("Error", "Failed to update blog. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Any unsaved changes will be lost.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, go back",
      cancelButtonText: "No, stay here",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashboard/update-blog");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          ✍️ Update Blog
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Blog Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={blog.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Blog Content
          </label>
          <textarea
            id="description"
            name="description"
            value={blog.description}
            onChange={handleChange}
            placeholder="Enter blog content"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-6">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
            Blog Image URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="url"
            value={blog.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white font-medium rounded-md transition-all ${loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {loading ? "Updating..." : "Update"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-full py-2 px-4 text-white font-medium bg-red-500 rounded-md hover:bg-red-600 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlogForm;
