import { useState } from 'react';
import { FcGallery } from 'react-icons/fc';
import Swal from 'sweetalert2'; // Import SweetAlert2

const AddGallery = () => {
  const [formData, setFormData] = useState({
    imageUrl: '', // Only image URL field
  });

  const [loading, setLoading] = useState(false); // Loading state for better UX

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader while submitting

    try {
      const response = await fetch('https://wedding-server-side.vercel.app/gallery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add gallery item');
      }

      const result = await response.json();
      console.log('Success:', result);

      // Reset form after successful submission
      setFormData({
        imageUrl: '', // Reset image URL field
      });

      // SweetAlert for success
      Swal.fire({
        icon: 'success',
        title: 'Gallery item added successfully!',
        text: 'Your gallery item has been added.',
      });
    } catch (error) {
      console.error('Error:', error.message);

      // SweetAlert for error
      Swal.fire({
        icon: 'error',
        title: 'Failed to add gallery item',
        text: 'An error occurred. Please try again later.',
      });
    } finally {
      setLoading(false); // Hide loader after submission
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-[90%] md:w-[80%] mx-auto mt-10">
      <div className='flex justify-center items-center gap-2'>
        <FcGallery className='text-4xl' />
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Add Gallery</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full text-white font-medium py-2 px-4 rounded-md ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Add Gallery'}
        </button>
      </form>
    </div>
  );
};

export default AddGallery;
