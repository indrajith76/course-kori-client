import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const data = [{ link: "/", text: "Home" }];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {data.map((item, idx) => (
              <li key={idx}>
                <Link to={`${item.link}`}>{item.text}</Link>
              </li>
            ))}
            {!user && (
              <>
                <li>
                  <Link
                    to="/login"
                    className="btn btn-sm bg-blue-600 text-white"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/registration"
                    className="btn btn-sm bg-blue-600 text-white"
                  >
                    SignUp
                  </Link>
                </li>
              </>
            )}

            {user && (
              <li>
                <div className="dropdown dropdown-end dropdown-bottom">
                  <div className="avatar" tabIndex={0} role="button">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/dashboard/profile">View Profile</Link>
                    </li>
                    <li>
                      <button
                        onClick={() => logOut()}
                        className="btn btn-sm btn-error text-white"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} className="w-[100px]" alt="" />
        </a>
      </div>
      
      {/* large screen */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu items-center menu-horizontal px-1">
          {data.map((item, idx) => (
            <li key={idx}>
              <Link to={`${item.link}`}>{item.text}</Link>
            </li>
          ))}
          {!user && (
            <>
              <li>
                <Link to="/login" className="btn btn-sm bg-blue-600 text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/registration"
                  className="btn btn-sm bg-blue-600 text-white"
                >
                  SignUp
                </Link>
              </li>
            </>
          )}

          {user && (
            <li>
              <div className="dropdown dropdown-end dropdown-bottom">
                <div className="avatar" tabIndex={0} role="button">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/dashboard/profile">View Profile</Link>
                  </li>
                  <li>
                    <button
                      onClick={() => logOut()}
                      className="btn btn-sm btn-error text-white"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>

      <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden navbar-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
