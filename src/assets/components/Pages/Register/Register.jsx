import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";



const Register = () => {
  const { createUser,GoogleSingIN } = useContext(AuthContext)
  const [pass, setPass]=useState('')
  const [error, setError]=useState('')
 
  const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    setError('')
    setPass(password)
    if(password.length<6){
      setError('password must be  6 characters')
      return;
    }
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/.test(password)){
      swal("Error", "Don't have a capital letter & special character", "error");
      return;
    }
    console.log(name, email, password)
    createUser(email, password)
      .then(res => {
        swal("Success!", "successful registration!", "success")
      })
      .catch(err => {
        swal("Oops!", "Something went wrong: " + err.message, "error");
      })

  }

  const handleGoogleSingin=()=>{
    // manual login email and password
   
    // google login 
    GoogleSingIN() 
    .then(res=>{
      swal("Success!", "You log in successfully!", "success");
    })
    .catch(err=>{
      swal("Error", err.message, "error");
    })
}
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
          <p className="text-center text-xl  text-red-600">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          
          <div className="flex justify-center items-center text-xl gap-3 border mx-2">
            <p className="inline"> <FcGoogle></FcGoogle></p>
            <p onClick={handleGoogleSingin} className="">Continue with Google</p>
          </div>

          <p className="text-center my-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;