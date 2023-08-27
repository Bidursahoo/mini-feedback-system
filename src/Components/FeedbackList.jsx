import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

export default function FeedbackList() {
    const navigate = useNavigate();
    const [feedbacks, setFeedbacks] = useState([]); 
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    axios.get("http://localhost:3004/feedbackdata").then((res) => {
    const filteredFeedbacks = res.data.filter((ele) => ele.mail === localStorage.getItem("email"));
    setFeedbacks(filteredFeedbacks);
  });
  };
  return (
    <>
    {localStorage.getItem("id") ? (
        <>
          <h1 className="text-center">Welcome , {localStorage.getItem("name")}</h1>
          <h1 className="text-center">Your FeedBacks</h1>
          <div className="text-center">
            <button className="btn btn-danger" onClick={() => {
              localStorage.removeItem("id")
              localStorage.removeItem("name")
              localStorage.removeItem("email")
              localStorage.removeItem("authTocken")
          navigate("/")}}>
              Log Out
            </button>
            <button className="btn btn-primary" onClick={() => {navigate("/feedback")}}>
              Give Feedback
            </button>
          </div>
          {/* <div className="row">
            {feedbacks.map((ele) => (
              <Card
                key={ele._id} 
                tempKey={ele._id}
                topic={ele.topic}
                content={ele.content}
                mail={ele.mail}
                updateStatus={ele.updated}
                deleteStatus={ele.deleted}
              />
            ))}
          </div> */}
          <table class="table table-bordered table-striped">
          <thead className="font-weight-bold">
            <th>No.</th>
            <th>Topic</th>
            <th>Email</th>
            <th>Content</th>
            <th>Update Status</th>
            <th>Delete Status</th>
            {localStorage.getItem("authTocken") ? (
              <>
                <th>Update Btn</th>
                <th>Delete Btn</th>
              </>
            ) : (
              <></>
            )}
          </thead>
          <tbody className="font-weight-normal">
            {feedbacks.map((ele, index) => (
              <Card
                index={index}
                key={ele._id} 
                tempKey={ele._id}
                topic={ele.topic}
                content={ele.content}
                mail={ele.mail}
                updateStatus={ele.updated}
                deleteStatus={ele.deleted}
              />
            ))}
          </tbody>
          </table>
        </>
      ) : (
        <>
          <h1 className="text-danger text-center">
            Unautorized Access Not Allowed
          </h1>
          <div className="text-center">
            <button
              className="btn btn-success"
              onClick={() => {
                navigate("/");
              }}
              type="submit"
            >
              LogIn
            </button>
          </div>
        </>
      )}
    </>
  )
}
