import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const { Login, GoogleSingIN } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)
    Login(email, password)
      .then(res => {
        swal('Login Successfully', 'You have successfully logged in!', 'success');
        navigate(location?.state ? location.state : '/')


      })
      .catch(err => {

        swal("Oops!", "Something went wrong: " + err.message, "error");
      })


  }

  const handleGoogleSingin = () => {
    // manual login email and password

    // google login 
    GoogleSingIN()
      .then(res => {
        swal("Success", res.user.displayName + " logged in successfully", "success");


      })
      .catch(err => {
        swal("Oops!", "Something went wrong: " + err.message, "error");
      })
  }

  return (

    <div className="hero min-h-screen shadow-base-200 ">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>

        </div>
        <div className="card flex-shrink-0  shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex justify-center items-center text-xl gap-3 border mx-2">
            <p className="inline"> <FcGoogle></FcGoogle></p>
            <p onClick={handleGoogleSingin} className="">Continue with Google</p>
          </div>
          <p className="text-center my-4">Do not have an account? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>

        </div>
      </div>

    </div>

  );
};

export default Login;