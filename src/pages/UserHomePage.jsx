import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserHomePage() {
  const [AllImages, setAllImages] = useState([]);

  useEffect(() => {
    let localStorageImages = JSON.parse(localStorage.getItem("IMAGES"));
    console.log(localStorageImages);
    setAllImages(localStorageImages);
  }, []);

  return (
    <div class="mx-auto container user-home-page-img row row-cols-3 row-cols-md-4 row-col-lg-4 g-4">
      {AllImages
        ? AllImages.map((img) => {
            return (
            <div class="col py-3">
              <div class="card shadow">
              <img src={img} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p>some description</p>
                   <div className="likeCommentsBox">
                       <span>like</span>
                       <span>comments</span>
                   </div>
                </div>
              </div>
            </div>

             
             )
          })
        : "nothing to show"}
    </div>
  );
}

export default UserHomePage;
