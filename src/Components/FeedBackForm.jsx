import React from "react";

export default function FeedBackForm() {
  return (
    <>
    <h1 className="text-center">Submit Your FeedBack</h1>
      <form className="card border-0 w-75 m-auto">
        <div class="form-group">
          <label for="topic">Topic</label>
          <input
            type="text"
            class="form-control"
            id="topic"
            placeholder="Write Your topic"
          />
        </div>

        <div class="form-group">
          <label for="feedback">Explain Your feedback</label>
          <textarea
            class="form-control"
            id="feedback"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-25">Submit FeedBack</button>
      </form>
    </>
  );
}
