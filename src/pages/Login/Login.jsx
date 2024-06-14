import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        navigate(from);
        toast.success("Successfully Login!");
        form.reset();
      })
      .catch((error) => toast.error("Login Failed!"));
  };
  return (
    <div className="my-20">
      <div className="w-96 mx-auto border rounded-xl p-5">
        <form onSubmit={handleLogin}>
          <h3 className="text-center font-bold text-3xl mb-8">Login</h3>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered block w-full"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input input-bordered block w-full"
            />
          </div>
          <button className="btn bg-blue-600 text-white mt-4 w-full">
            Login
          </button>
        </form>
        <p className="my-3">
          Haven't account?{" "}
          <Link className="text-blue-600 font-bold" to="/registration">
            Create Account
          </Link>
        </p>
        <button className="input input-bordered w-full flex items-center justify-center gap-2">
          <FcGoogle className="text-2xl" />
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
