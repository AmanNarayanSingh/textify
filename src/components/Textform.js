import React, {useState} from 'react'
// import PropTypes from 'prop-types'



export default function Textform(props,{mode}) {
    const handleUpClick=()=>{
        setState(text.toUpperCase());
    }

    const handleOnChange = (event)=>{
        setState(event.target.value);
    }

    const handleLowerClick=()=>{
        setState(text.toLowerCase());
    }

    const clearText=()=>{
        setState('')
    }

    const handleTitle=()=>{
        var str = text.toLowerCase().split(' ');
        let final = [ ];
         for(let  word of str){
           final.push(word.charAt(0).toUpperCase()+ word.slice(1));
         }
       setState(final.join(' '))
    }

    const handleCapitalize=()=>{
        const titleCase = text.toLowerCase().split('. ').map(word => {
                            return word.charAt(0).toUpperCase() + word.slice(1);
                            })
                            .join('. ');
        setState(titleCase)
    }

    const downloadText=()=>{
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('mybox').value],    
                    {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
    }

    const copyText=()=>{
        
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    }

    const handleSpaces=()=>{
        setState(text.trim().split(/ +/).join(' '))
    }

    const [text, setState]=useState("");
  return (
    <>
        <div className='container my-5'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                {/* <div className={`textbox ${mode === 'dark' ? 'dark-mode' : ''}`}> */}
                    <textarea className="form-control" value={text} id='mybox' rows="8" onChange={handleOnChange} style={{backgroundColor:'lightgray'}} ></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleTitle}>Convert to Title</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCapitalize}>Capitalize Case</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleSpaces}>Remove extra spaces</button>
            <button className="btn btn-primary mx-2 my-1" onClick={downloadText}>Download Text</button>
            <button className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy Text</button>
        </div>
        <div className='container my-5'>
            <h2>Your text summary</h2>
            <p>Entered text has {text.split(/\s+/).filter((element)=> { return element.length!==0}).length} words and {text.length} characters.</p>
            <p>An average reader can read the entire text in about {0.008 * text.split(' ').length} minutes.</p>
        </div>
        <div className="container my-5">
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something above to preview here.'}</p> 
        </div>
    </>
  )
}
