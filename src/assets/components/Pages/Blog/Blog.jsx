import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then((response) => response.json())
            .then((data) => setBlogData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);

    return (
        <div className="py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Wedding Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md flex flex-col" data-aos="fade-up">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <div className="flex-grow px-4">
                            <h2 className="text-xl font-semibold mb-2" data-aos="fade-right">{post.title}</h2>
                            <p className="text-gray-600" data-aos="fade-left">{post.description}</p>
                        </div>
                        <div className="flex items-end py-3 px-4">
                            <button
                                className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl"
                                data-aos="zoom-in"
                            >
                                Read More..
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
