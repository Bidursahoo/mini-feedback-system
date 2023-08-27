import React from "react";
// import FeedBackUpdate from "./FeedBackUpdate";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Card(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    // console.log(props)
    localStorage.setItem(
      "details",
      JSON.stringify({
        topic: props.topic,
        content: props.content,
        id: props.tempKey,
      })
    );
    navigate("/feedbacklist/update");
  };
  const handleDeleteClick = () => {
    axios
      .post("http://localhost:3004/delete", { id: props.tempKey })
      .then((res) => {
        if (res.data.status === 0) {
          navigate("/error");
        } else {
          navigate("/success");
        }
      });
  };
  return (
    <>
      {props.deleteStatus ? (
        <tr className="table-danger">
          <td>{props.index}</td>
          <td className="text-danger" colspan="7">Deleted Feedback </td>
        </tr>
      ) : props.updateStatus ? (
        <tr className="table-success">
          <td>{props.index}</td>
          <td>{props.topic.toUpperCase()}</td>
          <td>{props.mail}</td>
          <td>{props.content}</td>
          <td className=" text-success">updated</td>
          <td>not deleted</td>
          {localStorage.getItem("authTocken") ? (
            <>
              <td><button className="btn btn-success" onClick={handleClick}>
                Update
              </button></td>
              <td><button className="btn btn-danger" onClick={handleDeleteClick}>
                Delete
              </button></td>
            </>
          ) : (
            <></>
          )}
        </tr>
      ) : (
        <tr className="table-primary">
          <td>{props.index}</td>
          <td>{props.topic.toUpperCase()}</td>
          <td>{props.mail}</td>
          <td>{props.content}</td>
          <td>not updated</td>
          <td>not deleted</td>
          {localStorage.getItem("authTocken") ? (
            <>
              <td><button className="btn btn-success" onClick={handleClick}>
                Update
              </button></td>
              <td><button className="btn btn-danger" onClick={handleDeleteClick}>
                Delete
              </button></td>
            </>
          ) : (
            <></>
          )}
        </tr>
      )}
    </>
  );
}
