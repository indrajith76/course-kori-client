import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from 'react-hot-toast';

const Registration = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const saveUserInfo = (data) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const data = { name, email, password, role }; 

    createUser(name, email, password)
      .then((result) => {
        toast.success("Successfully Login!");
        saveUserInfo(data);
        navigate("/");
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-20">
      <div className="w-96 mx-auto border rounded-xl p-5">
        <form onSubmit={handleRegistration}>
          <h3 className="text-center font-bold text-3xl mb-8">Registration</h3>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="input input-bordered block w-full"
            />
          </div>
          <div className="mt-4">
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
          <div className="mt-4">
            <label htmlFor="role">Register as a</label>
            <select
              name="role"
              id="role"
              className="select select-bordered block w-full"
            >
              <option value="learner">Learner</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>
          <button className="btn bg-blue-600 text-white mt-4 w-full">
            Register
          </button>
        </form>
        <p className="my-3">
          Have account?{" "}
          <Link className="text-blue-600 font-bold" to="/login">
            Login
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

export default Registration;
