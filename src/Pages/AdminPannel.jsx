import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminPannel() {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    axios.get("http://localhost:3004/feedbackdata").then((res) => {
      setFeedbacks(res.data);
    });
  };
  return (
    <>
      {localStorage.getItem("admin") ? (
        <>
          <h1 className="text-center">Admin Panel</h1>
          <div className="text-center">
            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.removeItem("admin");
                navigate("/admin");
              }}
            >
              Log Out
            </button>
          </div>
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
                navigate("/admin");
              }}
              type="submit"
            >
              LogIn
            </button>
          </div>
        </>
      )}
    </>
  );
}
