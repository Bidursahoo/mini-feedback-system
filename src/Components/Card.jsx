import React from "react";
import FeedBackUpdate from "./FeedBackUpdate";
import { useNavigate } from "react-router-dom";
import axios from "axios";


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
  const handleDeleteClick =() =>{
    axios.post("http://localhost:3004/delete",{id:props.tempKey}).then((res)=>{
      if(res.data.status === 0){
        navigate("/error")
      }else{
        navigate("/success")
      }
    })
  }
  return (
    <>
      {(props.deleteStatus) ? (
        <div className="card border-danger w-25 m-auto mt-3">
          <div className="card-body">
            <h5 className="card-title text-danger">Deleted Feedback </h5>
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
            <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
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
            <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
            </>):(
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
}
