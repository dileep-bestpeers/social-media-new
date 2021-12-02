import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

function Comments() {
  const params = useParams();
  // const navigate = useNavigate();
  const [imgDATA, setImgDATA] = useState({});
  const [commentInput, setCommentInput] = useState("");
  const [allComments, setAllComments] = useState([]);

  const addCommentsData = (e) => {
    e.preventDefault();
    let localStorageImagesDATA = JSON.parse(localStorage.getItem("IMAGES"));
    const userCommenter = (JSON.parse(localStorage.getItem("LOGGED_IN_USER"))).username
   
    let newChangedItems = [];
    if (commentInput) {
      localStorageImagesDATA.map((image) => {
        if (image.id == params.id) {
          newChangedItems.push({
            ...image,
            comments: [...image.comments, {commentInput ,userCommenter,time:(new Date).toLocaleString()}],
          });
          setAllComments([...image.comments, {commentInput,userCommenter,time:(new Date).toLocaleString()}]);
        } else {
          newChangedItems.push(image);
        }
      });
      localStorage.setItem("IMAGES", JSON.stringify(newChangedItems));
      setCommentInput("");
      toast.success("you added a comment");
    } else {
      toast.warning("enter some words to explain your feeling ");
    }
    //    navigate('/user_home')
  };

  useEffect(() => {
    let localStorageImagesDATA = JSON.parse(localStorage.getItem("IMAGES"));
    let filteredImages = localStorageImagesDATA.filter(
      (image) => image.id == params.id
    );
    setImgDATA(filteredImages[0]);
    // console.log(filteredImages[0]);
    // console.log(imgDATA);

  }, []);


  useEffect(() => {
    let localStorageImagesDATA = JSON.parse(localStorage.getItem("IMAGES"));
    let filteredImages = localStorageImagesDATA.filter(
      (image) => image.id == params.id
    );
    // console.log(imgDATA);
    setAllComments(filteredImages[0].comments);
    // setAllComments(["Be the first to comments"]);
  }, []);

  return (
    <div className="row container mx-auto">
      <div className="col-md-6 mx-auto">
        <div className="card mb-3">
          <img
            src={imgDATA.img}
            className="w-100 comments_img card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-uppercase">{imgDATA.title}</h5>
            <p className="card-text"></p>
            <span>Upload By - {imgDATA.uploadByName}</span>
            <br /> <span>likes {imgDATA.like}</span>
          </div>
          <div>
            <form onSubmit={addCommentsData} className="w-100 mb-2 px-4 d-flex flex-column justify-content-center" action="">
              <input
              className="shadow border-none mb-1"
                onChange={(e) => setCommentInput(e.target.value)}
                value={commentInput}
                type="text"
              />
              <button className="btn btn-primary btn-sm">add comment</button>
            </form>
          </div>
          <div>
            <div>
              {allComments.length > 0 ? (
                allComments.map((comment, index) => {
                  return (
                    <div className="p-3 bg-secondary my-1 text-light" key={index}>
                      <span className="fw-bold">{comment.userCommenter}</span>
                      <div className="d-flex justify-content-between">
                      <small>{comment.commentInput}</small>
                      <small>{comment.time}</small>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>no Comments yet</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
