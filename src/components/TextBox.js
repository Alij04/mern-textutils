import React, { useState } from "react";

export default function TextBox(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };

  const wordCounter = () => {
    let x = text.split(/[ ]+/g);
    let y = x.length;
    for (let i = 0; i < x.length; i++) {
      if (x[i] === "") y--;
    }

    return y;
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("TextBox is cleared!", "success");
  };
  const handleCopyClick = () => {
    var x = document.getElementById("myBox");
    x.select();
    navigator.clipboard.writeText(x.value);
    props.showAlert("Text Copied!", "success");
  };

  const handleSpacesClick = () => {
    let x = text.split(/[ ]+/g);
    setText(x.join(" "));
    props.showAlert("Extra Spaces are removed!", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div
      className={`container text-${props.mode === "light" ? "dark" : "light"}`}
    >
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleChange}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpacesClick}>
          Remove Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {wordCounter()} words and {text.length} characters
        </p>
        <p>
          Time required to read your text: {text.split(" ").length * 0.008}{" "}
          Minutes
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </div>
  );
}
