import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCapClick = (event) => {
    let newText = text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    setText(newText);
  };

  const handleReClick = (event) => {
    let newText = text.trim().replace(/\s+/g, " ");
    setText(newText);
  };

  const handleCoClick = (event) => {
    navigator.clipboard.writeText(text);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container ">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter your text here "
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase{" "}
          </button>

          <button className="btn btn-primary mx-2 gap" onClick={handleLoClick}>
            Convert to lowercase{" "}
          </button>

          <button className="btn btn-primary mx-2 gap" onClick={handleCapClick}>
            Convert to Capitalized Case{" "}
          </button>
        </div>
        <div className="mt-2 ">
          <button className="btn btn-primary mx-2 " onClick={handleReClick}>
            Remove ExtraSpace{" "}
          </button>
          <button className="btn btn-primary mx-2 " onClick={handleCoClick}>
            Copy Text{" "}
          </button>
          <button
            className="btn btn-primary mx-2  gap "
            onClick={handleClClick}
          >
            Clear Text{" "}
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
