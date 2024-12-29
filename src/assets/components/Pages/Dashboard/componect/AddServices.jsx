import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const AddServices = () => {
  const [service, setService] = useState({
    img_url: "",
    title: "",
    description: "",
    price: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!service.img_url || !service.title || !service.description || !service.price) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields.",
      });
      return;
    }

    if (service.price < 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Price cannot be negative.",
      });
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://wedding-server-side.vercel.app/add-service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(service),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Service added:", result);
      setSuccess(true);

      // SweetAlert for success
      Swal.fire({
        icon: "success",
        title: "Service added successfully!",
        text: "Your service has been added.",
      });

      // Clear the form after submission
      setService({
        img_url: "",
        title: "",
        description: "",
        price: "",
      });

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Error adding service:", err);
      setError("Failed to add service. Please try again later.");

      // SweetAlert for error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add the service. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add a New Service</h2>
      {success && (
        <div className="mb-4 text-green-600 font-medium">
          Service added successfully!
        </div>
      )}
      {error && (
        <div className="mb-4 text-red-600 font-medium">{error}</div>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[80%] bg-white p-6 rounded-lg shadow-md"
      >
        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="img_url" className="block text-gray-700 font-medium mb-2">
            Image URL:
          </label>
          <input
            type="url"
            id="img_url"
            name="img_url"
            value={service.img_url}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Service Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Service Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={service.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={service.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none h-40"
          ></textarea>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={service.price}
            onChange={handleChange}
            min="0"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white font-medium py-2 rounded-md transition duration-300`}
        >
          {loading ? "Submitting..." : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default AddServices;
