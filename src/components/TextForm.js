import React, {useState} from 'react'

export default function TextForm(props) {
  const HandleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    if (text === ''){
      props.showAlert("Please enter text in the textfield to convert into uppercase", "danger");
    }
    else{
      props.showAlert("Converted to Uppercase successfully", "success");
    }
  }
  
  const HandleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    if (text === ''){
      props.showAlert("Please enter text in the textfield to convert into lowercase", "danger");
    }
    else{
      props.showAlert("Converted to Lowercase successfully", "success");
    }
  }
  
  const HandleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
    if (text === ''){
      props.showAlert("Please enter text in the textfield to clear the text", "danger");
    }
    else{
      props.showAlert("Text cleared successfully", "success");
    }
  }
  
  const HandleSpaceClick = () => {
    // console.log("Uppercase was clicked" + text);
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    if (text === ''){
      props.showAlert("Please enter text in the textfield for speech", "danger");
    }
    else{
      props.showAlert("Speech recognized successfully", "success");
    }
  }
  
  const HandleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  
  // const HandleNoClick = (event) => {
  //   // console.log("On change");
  //   setText(event.target.value);
  // }
  
  
  const [text, setText] = useState('');
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className='container' style={{color: props.mode==='dark' || props.mode==='danger' || props.mode==='success'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" placeholder='Enter your text here' value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode==='dark'?'#050a16':'white', color: props.mode==='dark' || props.mode==='danger' || props.mode==='success'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode} mx-2`} onClick={HandleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={HandleLoClick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={HandleClearClick}>Clear</button>
        <button className={`btn btn-${props.mode} mx-2`} onClick={HandleSpaceClick}>Speak</button>
        {/* <button className="btn btn-primary mx-2" onClick={HandleNoClick}>Number of integers</button> */}
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' || props.mode==='danger' || props.mode==='success'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.length === 0? '0' :text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here..."}</p>
    </div>
    </>
  )
}

