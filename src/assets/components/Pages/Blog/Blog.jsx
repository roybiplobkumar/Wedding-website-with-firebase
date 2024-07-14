import { useEffect, useState } from "react";

const Blog = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then((response) => response.json())
            .then((data) => setBlogData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Wedding Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md flex flex-col">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600">{post.description}</p>
                        </div>
                        <div className="flex items-end py-3 ml-2">
                            <button className="btn btn-sm text-red-500  py-2 ">Read More..</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;

