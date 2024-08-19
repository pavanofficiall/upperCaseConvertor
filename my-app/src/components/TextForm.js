import React,{useState} from 'react'

export default function TextForm(props){
    const [text, setText] = useState('Enter text here');
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    return(
        <>  
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-dark" onClick={handleUpClick}  >To UPPERCASE</button>
        </>
    )
}