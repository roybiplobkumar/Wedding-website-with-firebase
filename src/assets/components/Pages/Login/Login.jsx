import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { Login, GoogleSingIN } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    Login(email, password)
      .then(() => {
        swal("Login Successfully", "You have successfully logged in!", "success");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        swal("Oops!", "Something went wrong: " + err.message, "error");
      });
  };

  const handleGoogleSignin = () => {
    GoogleSingIN()
      .then((res) => {
        swal("Success", `${res.user.displayName} logged in successfully`, "success");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        swal("Oops!", "Something went wrong: " + err.message, "error");
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 shadow-lg">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left">
         
          <img src="login.jpg" alt="Login Illustration" className="w-full  mx-auto" />
        </div>

        <div className="card w-full max-w-md shadow-xl bg-white rounded-xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">Email</span>
              </label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                className="input input-bordered rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">Password</span>
              </label>
              <input 
                type="password" 
                name="password" 
                placeholder="Enter your password" 
                className="input input-bordered rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-blue-700 hover:text-blue-900 font-medium">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-800 text-white border-none hover:bg-blue-900 transition duration-300 ease-in-out rounded-full px-8 py-3 font-semibold text-lg">
                Login
              </button>
            </div>
          </form>

          <div className="divider my-6">OR</div>

          <div 
            onClick={handleGoogleSignin} 
            className="flex items-center justify-center gap-4 py-3 mx-4 border border-gray-300 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg">
            <FcGoogle size={28} />
            <p className="text-gray-700 font-medium text-lg">Continue with Google</p>
          </div>

          <p className="text-center my-6 text-gray-600 text-sm">
            Don’t have an account? 
            <Link to="/register" className="text-blue-700 font-semibold transition duration-300 ease-in-out hover:text-blue-900"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
