import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPost() {
  const [selectedFile, setSelectedFile] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const navigate = useNavigate();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const fileSelectHandler = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setSelectedFile(base64);
  };

  const setToLocalStorage = () => {
    let localStorageImages = localStorage.getItem("IMAGES");
    const uploadImgData = {
      img: selectedFile,
      uploadByName: JSON.parse(localStorage.getItem("LOGGED_IN_USER")).username,
      id: new Date().getTime(),
      like: 0,
      comments: [],
      title: imgTitle,
    };

    if (localStorageImages) {
      localStorageImages = JSON.parse(localStorageImages);
      localStorageImages.push(uploadImgData);
      localStorage.setItem("IMAGES", JSON.stringify(localStorageImages));
    } else {
      localStorage.setItem("IMAGES", JSON.stringify([uploadImgData]));
    }
    setSelectedFile("");
    toast.success("File Uploaded successfully");
    setTimeout(() => {
      navigate("/user_home");
    }, 1500);
  };

  return (
    <div className="row mx-auto d-flex  flex-column">
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
      <div className="col-10 col-lg-4 col-md-6 mx-auto shadow mt-4">
        <div className=" d-flex  flex-column py-3 text-center">
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            className="my-4"
            onChange={fileSelectHandler}
          />
          <input
            placeholder="Enter image title"
            type="text"
            name="title"
            onChange={(e) => {
              setImgTitle(e.target.value);
            }}
            className="my-3"
          />

          <button
            onClick={setToLocalStorage}
            className="btn btn-primary btn-sm"
          >
            post
          </button>
        </div>
      </div>

      <div className="container-post mt-4">
        {selectedFile ? <img src={selectedFile} alt="" /> : ""}
      </div>
    </div>
  );
}

export default AddPost;
