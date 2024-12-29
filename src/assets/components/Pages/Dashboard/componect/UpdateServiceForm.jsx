import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateServiceForm = () => {
  const { id } = useParams(); // Get service ID from URL
  const navigate = useNavigate();

  const [service, setService] = useState({
    title: "",
    description: "",
    price: "",
    img_url: "", // Added img_url to the state
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch existing service data
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`https://wedding-server-side.vercel.app/services/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch service data");
        }
        const data = await response.json();
        setService(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch service data");
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch service data. Please try again later!",
        });
      }
    };

    fetchService();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to save the changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        setError(null);

        try {
          const response = await fetch(`https://wedding-server-side.vercel.app/services/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(service),
          });

          if (!response.ok) {
            throw new Error("Failed to update service");
          }

          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Service updated successfully!",
          });

          setTimeout(() => {
            navigate("/dashboard/update-services"); // Redirect back to service list
          }, 2000);
        } catch (err) {
          console.error(err);
          setError("Failed to update service. Please try again.");
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to update service. Please try again later!",
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Update Service</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={service.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={service.description}
            onChange={handleChange}
            className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize"
            required
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={service.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Image URL</label>
          <input
            type="text"
            name="img_url"
            value={service.img_url}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-medium transition-all ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
            }`}
        >
          {loading ? "Updating..." : "Update Service"}
        </button>
      </form>
    </div>
  );
};

export default UpdateServiceForm;
