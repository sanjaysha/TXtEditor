import React, {useState} from 'react'

export default function TextForm(props) {
   
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const handleUpClick = () => {
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
        navigator.clipboard.writeText(text);
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
    return (
        <>
        <div className="container" style={{color: props.mode === 'light'? 'black' : 'white'}}>
            <h2 className="mb-3">{props.heading}</h2>
            <div className="mb-3 ">
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'light'? 'white': 'rgb(31 73 114)', color: props.mode === 'light'? 'black' : 'white'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'? 'black' : 'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
