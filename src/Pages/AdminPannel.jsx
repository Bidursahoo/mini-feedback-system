import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminPannel() {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]); // Initialize as an empty array
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
            <button className="btn btn-danger" onClick={() => {localStorage.removeItem("admin")
          navigate("/admin")}}>
              Log Out
            </button>
          </div>
          <div className="row">
            {feedbacks.map((ele) => (
              <Card
                key={ele.id} // Don't forget to add a unique key
                topic={ele.topic}
                content={ele.content}
                mail={ele.mail}
                updateStatus={ele.updated}
                deleteStatus={ele.deleted}
              />
            ))}
          </div>
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
