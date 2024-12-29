import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const UpdateBlog = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch('https://wedding-server-side.vercel.app/blog')
            .then((response) => response.json())
            .then((data) => setBlogData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://wedding-server-side.vercel.app/blog/${_id}`, {
                    method: 'DELETE'
                })
                    .then((response) => {
                        if (response.ok) {
                            const remainingBlogs = blogData.filter(post => post._id !== _id);
                            setBlogData(remainingBlogs);
                            Swal.fire(
                                "Deleted!",
                                "Your blog post has been deleted.",
                                "success"
                            );
                        } else {
                            throw new Error('Failed to delete');
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting:", error);
                        Swal.fire(
                            "Error!",
                            "Failed to delete the blog post. Please try again.",
                            "error"
                        );
                    });
            }
        });
    };

    return (
        <div className="pt-12 px-4 pb-28">
            <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Wedding Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((post) => (
                    <div key={post._id} className="bg-white rounded-lg shadow-md flex flex-col" data-aos="fade-up">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <div className="flex-grow px-4">
                            <h2 className="text-xl font-semibold mb-2" data-aos="fade-right">{post.title}</h2>
                            <p className="text-gray-600" data-aos="fade-left">{post.description}</p>
                        </div>
                        <div className="flex justify-between py-3 px-4 gap-2">
                            <Link to={`/dashboard/update-blog-form/${post._id}`} className="w-full">
                                <button
                                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl"
                                    data-aos="zoom-in"
                                >
                                    Update
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(post._id)}
                                className="w-full px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl"
                                data-aos="zoom-in"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpdateBlog;
