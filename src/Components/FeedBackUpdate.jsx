import axios from "axios";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../UtilityPages/Error";


export default function FeedBackUpdate(props) {
  const navigate = useNavigate();
  const [feedback , setFeedback] = useState({
    ownerId: JSON.parse(localStorage.getItem("details")).id,
    mail: localStorage.getItem("email"),
    topic:JSON.parse(localStorage.getItem("details")).topic,
    content:JSON.parse(localStorage.getItem("details")).content,
    updated:true
  })
  
  const handleChange = (event) =>{
    const {name , value} = event.target;
    setFeedback({
      ...feedback,
      [name]:value
    })
    console.log(JSON.parse(localStorage.getItem("details")).id)
  }

  const handleSubmit =(event) =>{
    event.preventDefault();
    localStorage.removeItem("details")
    axios.post("http://localhost:3004/update" , feedback).then(result=>{
      if(result.data.status === 0){
        navigate("/error")
      }else{
        navigate("/success");
      }
    })
  }
  return (
    
    <>
    {localStorage.getItem("authTocken")?(
      <>
      <h1 className="text-center text-warning">Heyyy {localStorage.getItem("name")}</h1>
      <h1 className="text-center">Update Your FeedBack</h1>
      <div className="text-center">
      </div>
      <form className="card border-0 w-75 m-auto" onSubmit={handleSubmit} method="post">
        <div className="form-group">
          <label for="topic">Topic</label>
          <input
            type="text"
            className="form-control"
            id="topic"
            placeholder="Write Your topic"
            name="topic"
            onChange={handleChange}
            value={feedback.topic}
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
            value={feedback.content}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-25">Submit FeedBack</button>
      </form>
      </>
    ):
      <>
      <Error/>
      </>
    }
    </>
  );
}



