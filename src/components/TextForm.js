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

  const HandleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
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

  const HandleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
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
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" placeholder='Enter your text here' value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode==='dark'?'#050a16':'white', color: props.mode==='dark' || props.mode==='danger' || props.mode==='success'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mx-2 my-2`} onClick={HandleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mx-2 my-2`} onClick={HandleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mx-2 my-2`} onClick={HandleClearClick}>Clear</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mx-2 my-2`} onClick={HandleSpaceClick}>Speak</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mx-2`} onClick={HandleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mx-2`} onClick={HandleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark' || props.mode==='danger' || props.mode==='success'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}

