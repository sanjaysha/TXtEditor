import React from 'react'

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })

  let myStyle = {
    color: props.mode === 'dark'? 'white' : 'black',
    backgroundColor: props.mode === 'dark'? 'rgb(31 73 114)' : 'white'
  }

  // const [btnText, setBtnText] = useState('Enable Dark Mode')

  // const toggleStyle = () => {
  //   if (myStyle.color === 'white') {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  //   else {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  // }

  return (
    <div className="container pb-3" >
      <h1 className="my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong> Analyze your Text </strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TXtEditor gives you a way you analyze your text quickely and efficiently. Be it word count , character count or text editing.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong> Free for Use </strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TXtEditor is a free character counter tool that provides instant character count and word count statistics for a given text. TXtEditor reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong> Browser Compatible </strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suit to count characters in facebook, blog, books, exel documents, pdfs, essays etc. 
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
  )
}
