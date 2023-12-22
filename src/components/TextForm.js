import React from "react";
import { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState('')

  const handleClick = () => {
    setText(text.toUpperCase())
    props.showAlert("your text is UPPERCASED!",'success')
  }
  const handleLcClick = () => {
    setText(text.toLowerCase())
    props.showAlert("your text is LOWERCASED!",'success')
  }

  const handleChange = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
  }

  const handleCaptilizeClick = () => {
    let newText = text.split(" ")
    let captext = [];
    for (let i = 0; i < newText.length; i++) {
      let cap = newText[i].charAt(0).toUpperCase() + newText[i].substr(1, newText[i].length)
      captext.push(cap)
    }
    captext = captext.join(" ")
    setText(captext)
    props.showAlert("Each first letter in a word is captilized!",'success')
  }

  const handleCopyClick = () => {
    let copyText = document.getElementById('myBox');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text);
    props.showAlert("your text is COPIED!",'success')
  }

  const handleClickEmpty = () => {
    document.getElementById('myBox').value = "";
    document.getElementById('myPreview').innerHTML = "Enter the text to see the preview";
  }

  const wordCount = () =>{
    const newWord = text.split(' ');
    console.log(newWord)
    const count = newWord.filter((item)=>{
      return item !==  ""
    })
    console.log(count)
    return count.length
  }

  const charCount = () =>{
    const newWord = text.split(' ');
    console.log(newWord)
    let count = newWord.filter((item)=>{
      return item !==  ""
    })
    console.log(count)
    let charcount = count.join('')
    return charcount.length
  }

  return (
    <>
      <div className="container mt-3">
        <h1 style = {{color:props.mode === 'dark' || props.mode ==='danger'? 'white':'#042743'}}>{props.title}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleChange} onClick={handleClickEmpty} style = {{backgroundColor:props.mode === 'light'? 'white':'#13466e' , color:props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode === 'danger' ? 'danger' : 'primary'}`} disabled = {text.length === 0} onClick={handleClick}>Convert to UpperCase</button>
        <button className={`btn btn-${props.mode === 'danger' ? 'danger' : 'primary'} ms-3`} disabled = {text.length === 0} onClick={handleLcClick}>Convert to LowerCase</button>
        <button className={`btn btn-${props.mode === 'danger' ? 'danger' : 'primary'} ms-3`} disabled = {text.length === 0} onClick={handleCaptilizeClick}>Captilize</button>
        <button className={`btn btn-${props.mode === 'danger' ? 'danger' : 'primary'} ms-3`} disabled = {text.length === 0} onClick={handleCopyClick}>Copy</button>
      </div>
      <div className="container my-4" style = {{color:props.mode === 'dark' || props.mode === 'danger'? 'white':'#042743'}}>
        <h2>Your Word Counts</h2>
        <p><strong>{wordCount()}</strong> words and <strong>{charCount()}</strong> characters</p>
        <p><strong>{0.008 * wordCount()}</strong> Minutes</p>
        <h2>Preview</h2>
        <p id="myPreview">{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

export default TextForm;
