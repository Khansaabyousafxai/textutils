import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleclearClick = () => {
    console.log("clearedclick was clicked");
    let newText = ("");
    setText(newText);
  };

  
  const handleLoClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  


  const handleUpChange = (event) => {
    console.log("on changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div className="container" style={{color: props.mode==='dark'? 'white' : 'black'}}>
      <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
          style={{background: props.mode==='dark'? 'grey' : 'white',color:props.mode==='dark'? 'white' : 'black'}}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={8}
            onChange={handleUpChange}
            value={text}
          />
        </div>
        <button className="button btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
        <button className="button btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
        <button className="button btn btn-primary mx-1" onClick={handleclearClick}>clear text</button>
          
        

        <div className="container my-3" style={{color: props.mode==='dark'? 'white' : 'black'}}>
          <h2>your text summery</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
          <h2>preview</h2>
          <p>{text.length>0? text : "Enter something to preview"}</p>
        </div>
      </>
    </div>
  );
}
