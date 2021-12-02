import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import { loadFromLocalStorage, logIn } from "../redux/actions/action";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxData = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email === "" && password === "") {
      toast("Please enter all required fields");
    } else if (!email) {
      toast.error("Eamil is required");
      const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
      const result = email.match(regex);
      if (!result) {
        toast.error("Invalid email address");
      }
    } else if (!password) {
      toast.error("password is required");
    } else {
      const localStorageUSER = JSON.parse(localStorage.getItem("SOCIAL"));
      if (localStorageUSER) {
        const filteredUSER = localStorageUSER.filter((user) => {
          return (
            email === user.user.signIn.email &&
            password === user.user.signIn.password
          );
        });
        if (filteredUSER.length) {
          localStorage.setItem(
            "LOGGED_IN_USER",
            JSON.stringify(filteredUSER[0].user.signIn)
          );
          toast.success("login successfully");
          setTimeout(() => {
            // navigate(`{/user_home/:${filteredUSER.user.signIn.username}}`)
            navigate("/");
          }, 1500);
        }
      } else {
        toast.warning("account does not exist");
      }
    }
  };

  return (
    <div className="row mx-auto py-3">
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
      <div className="col-12 col-md-6 col-lg-5 mx-auto py-3">
        <Heading title="Welcome Back" />
        <form action="" onSubmit={handleFormSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleInput}
              name="email"
              value={formData.email}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handleInput}
              name="password"
              value={formData.password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary outline-dark btn-sm mt-4 w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
