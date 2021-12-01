import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navigation() {
  const [userNotLogin, setUserNotLogin] = useState(true);
  const [MyDetails, setMyDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userDATA = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    setMyDetails(userDATA);
    if (userDATA) {
      const localName = userDATA.username;
      const localEmail = userDATA.email;
      setMyDetails({
        name: localName,
        email: localEmail,
      });
    }
    if (userDATA) {
      setUserNotLogin(!userNotLogin);
    }
  },[]);

  const logOutUser = () => {
    localStorage.removeItem("LOGGED_IN_USER");
    toast.success("logged out successfully");
    setTimeout(() => {
      navigate("/");
    }, 1500);
    setUserNotLogin(!userNotLogin);
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Social
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {userNotLogin ? (
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-link">{MyDetails.name}</li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/add_post">
                      Add Posts
                    </Link>
                  </li>

                  <li className="nav-item" onClick={logOutUser}>
                    <Link className="nav-link" to="">
                      Log out
                    </Link>
                  </li>
                  </ul>
              )}
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
