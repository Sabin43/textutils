import React, {useState}from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    
  }

    const handleLoClick = ()=>{
      let newText=text.toLowerCase();
      setText(newText);
  }
  const handleOnChange = (event)=>{
      setText(event.target.value);
  }
  const handleClear = ()=>{
      setText("");
  }
  const [text, setText] = useState("");


  return (
<>
    <div className= "container" style={{color: props.mode==='dark'?'white':'black'}}>

<div className="mb-3">
<label htmlFor="myBox" className="form-label">{props.title}</label>
<textarea className="form-control" value ={text} onChange ={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#697076':'white', color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
</div>
<button className="btn-info mx-2" onClick={handleUpClick} >convert to uppercase</button>
<button className="btn-info mx-2" onClick={handleLoClick} >convert to lowercase</button>
<button className="btn-info mx-2" onClick={handleClear} >clear text</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h1> your text summary </h1>
        <p>{text.split(" ").length-1} words. {text.length} characters.</p>
    </div>
</>
  )
}
