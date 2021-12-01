import React, { useState } from "react";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "../redux/actions/action";
import { useDispatch } from "react-redux";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email, password2 } = formData;
    if (!username) {
      toast.error("username is rquired");
    } else if (!email) {
      toast.error("email is rquired");
    } else if (!password) {
      toast.error("password is rquired");
    } else if (!password2) {
      toast.error(" confirmation password is rquired");
    } else if (password !== password2) {
      toast.error(" passwords not match");
    } else {
      toast.success("Your account has been created successfully");
      dispatch(signIn({ username, email, password }));
      setFormData({
        username: "",
        email: "",
        password: "",
        password2: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
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
        <Heading title="Create an account" />
        <form action="" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput1"
              placeholder="username"
              onChange={handleInput}
              name="username"
              value={formData.username}
            />
            <label htmlFor="floatingInput1">User Name</label>
          </div>
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
          <div className="form-floating mb-3">
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
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword1"
              placeholder="Password"
              onChange={handleInput}
              value={formData.password2}
              name="password2"
            />
            <label htmlFor="floatingPassword1">Confirm Password</label>
          </div>
          <button className="btn btn-primary outline-dark btn-sm mt-4 w-100">
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
