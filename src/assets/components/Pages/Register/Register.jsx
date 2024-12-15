import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  const { createUser, GoogleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation happens only once
    });
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    setError("");

    if (password.value.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/.test(password.value)) {
      setError("Password must include an uppercase letter, a lowercase letter, and a special character.");
      return;
    }

    createUser(email.value, password.value)
      .then(() => {
        swal("Success!", "You have successfully registered!", "success");
        e.target.reset();
      })
      .catch((err) => {
        swal("Oops!", `Something went wrong: ${err.message}`, "error");
      });
  };

  const handleGoogleSignin = () => {
    GoogleSignIn()
      .then(() => {
        swal("Success!", "You have successfully logged in with Google!", "success");
      })
      .catch((err) => {
        swal("Error", `Google Sign-In failed: ${err.message}`, "error");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-indigo-100 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full lg:w-2/3 p-8 mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4" data-aos="fade-up">
            Create Your Account
          </h2>
          <p className="text-gray-500 text-center mb-6" data-aos="fade-up">
            Fill in your details to sign up and start your journey.
          </p>

          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          <form onSubmit={handleRegister} className="space-y-4">
            <div data-aos="fade-up" data-aos-delay="100">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
              <Link
                to="#"
                className="text-sm text-indigo-500 hover:underline inline-block mt-1"
              >
                Forgot password?
              </Link>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Register
              </button>
            </div>
          </form>

          <div className="flex items-center my-6">
            <div className="w-full h-px bg-gray-300"></div>
            <p className="px-4 text-gray-500">OR</p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div
            onClick={handleGoogleSignin}
            className="flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FcGoogle size={24} />
            <p className="text-gray-700 font-medium">Continue with Google</p>
          </div>

          <p className="text-center mt-6 text-gray-600" data-aos="fade-up">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
