import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeedBackForm() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    ownerId: localStorage.getItem("id"),
    mail: localStorage.getItem("email"),
    topic: "",
    content: "",
  });

  const handleClick = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("authTocken");
    navigate("/");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
    console.log(feedback);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3004/feedback", feedback).then((result) => {
      if (result.data.status === 0) {
        navigate("/error");
      } else {
        navigate("/success");
      }
    });
  };
  return (
    <>
      {localStorage.getItem("authTocken") ? (
        <>
          <h1 className="text-center text-warning">
            Welcome {localStorage.getItem("name")}
          </h1>
          <h1 className="text-center">Submit Your FeedBack</h1>
          <div className="text-center">
            <button onClick={handleClick} className="btn btn-danger ml-2">
              LogOut
            </button>
          </div>
          <form
            className="card border-0 w-75 m-auto"
            onSubmit={handleSubmit}
            method="post"
          >
            <div className="form-group">
              <label for="topic">Topic</label>
              <input
                type="text"
                className="form-control"
                id="topic"
                placeholder="Write Your topic"
                name="topic"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label for="feedback">Explain Your feedback</label>
              <textarea
                className="form-control"
                id="feedback"
                rows="3"
                name="content"
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-25">
              Submit FeedBack
            </button>
          </form>
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
  );
}
