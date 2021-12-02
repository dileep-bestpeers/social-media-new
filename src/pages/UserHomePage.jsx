import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserHomePage() {
  const [AllImages, setAllImages] = useState([]);
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState([])
  const navigate = useNavigate();

  const addComment = (id) => {
    navigate('/comments/' + id);
  }

  const handleLinksIMGClick = (id) => {
    // console.log(id);
    let allLikes = (JSON.parse(localStorage.getItem("IMAGES")))
    let newChangedItems = []
    allLikes.map((item) => 
    {
      if(item.id === id){
        newChangedItems.push({
          ...item,like: (item.like +1)
        })
      }
      else{
        newChangedItems.push(item)
      }
    })
    localStorage.setItem("IMAGES", JSON.stringify(newChangedItems))
    // let totalLikes = allLikesItemFilter[0].like + 1
  }

  useEffect(() => {
    let localStorageImages = JSON.parse(localStorage.getItem("IMAGES"));
    setAllImages(localStorageImages);
  }, []);

  return (
    <div className="mx-auto container user-home-page-img row row-cols-3 row-cols-md-4 row-col-lg-4 g-4">
      {AllImages
        ? AllImages.map((img , index) => {
            return (
            <div key={index} className="col py-3">
              <div className="card shadow">
              <img src={img.img} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{img.title}</h5>
                  <span className="card-upload-name">upload by - {img.uploadByName}</span>
                   <div className="likeCommentsBox">
                       <span onClick={()=>handleLinksIMGClick(img.id)}>likes {img.like}</span>
                       <span onClick={()=>addComment(img.id)}>comments {img.comments.length}</span>
                   </div>
                </div>
              </div>
            </div>

             
             )
          })
        : "nothing to show "}
    </div>
  );
}

export default UserHomePage;
