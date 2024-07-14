import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-purple-600">
                <div className="text-center text-white">
                    <h2 className="text-6xl font-extrabold mb-4">404 - Page Not Found</h2>
                    <p className="text-lg mb-8">Oops! The page you are looking for doesn't exist.</p>
                    <Link to="/" className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        Go back to the homepage
                    </Link>
                </div>
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" alt="404 Illustration" className="mt-10 max-w-xl w-full h-[30vh]" />
            </div>
        </div>
    );
};

export default NotFound;