import React from "react";
import FeedBackUpdate from "./FeedBackUpdate";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  const handleClick = () =>{
    // console.log(props)
    localStorage.setItem("details",JSON.stringify({
      topic : props.topic,
      content: props.content,
      id: props.tempKey
    }))
    navigate("/feedbacklist/update");
  }
  return (
    <>
      {props.deleteStatus ? (
        <div className="card border-danger w-25 m-auto mt-3">
          <div className="card-body">
            <h5 className="card-title">Deleted Feedback </h5>
          </div>
        </div>
      ) : (props.updateStatus) ? (
        <div className="card border-success w-25 m-auto mt-3">
          <div className="card-body">
            <h5 className="card-title">{props.topic.toUpperCase()}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {props.mail}
            </h6>
            <p className="card-text">{props.content}</p>
            <small className="card-link text-success">updated</small>
            <small className="card-link ">not deleted</small>
            <br />
            {(localStorage.getItem("authTocken"))?(<>
              <button className="btn btn-success" onClick={handleClick}>Update</button>
            <button className="btn btn-danger">Delete</button>
            </>):(
              <></>
            )}
          </div>
        </div>
      ) : (
        <div className="card border-primary w-25 m-auto mt-3">
          <div className="card-body">
            <h5 className="card-title">{props.topic.toUpperCase()}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {props.mail}
            </h6>
            <p className="card-text">{props.content}</p>
            <small className="card-link ">not updated</small>
            <small className="card-link ">not deleted</small>
            <br />
            {(localStorage.getItem("authTocken"))?(<>
              <button className="btn btn-success" onClick={handleClick}>Update</button>
            <button className="btn btn-danger">Delete</button>
            </>):(
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
}
