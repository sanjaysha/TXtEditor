import React, {useState} from 'react'

export default function TextForm(props) {
   
    const handleonchange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }
    const handleUpClick = () => {
        // console.log("Uppercase is Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");

    }
    const handleCopyClick = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const [text, setText] = useState('');
    // text ="new text"; // Wrong way to change the state
    // setText =("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode === 'light'? 'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 mt-3">
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'light'? 'white': 'rgb(80 88 96)', color: props.mode === 'light'? 'black' : 'white'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'? 'black' : 'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text:"Enter text in textarea to preview it here"}</p>
        </div>
        </>
    )
}
