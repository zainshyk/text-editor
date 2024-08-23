import './App.css'
import React, {useState} from 'react'
import {UpperCaseLight,LowerCaseLight,ClearLight,RemoveSpaceLight,CopyLight,BoldLight,ItalicLight} from './Icons'
import {UpperCaseDark,LowerCaseDark,ClearDark,RemoveSpaceDark,CopyDark,BoldDark,ItalicDark} from './Icons'

export default function EditorBox(props) {
  
  const upperText = () => {
    const clickUpper = text.toUpperCase();
    setText(clickUpper);
  }

  const lowerText = () => {
    const clickLower = text.toLowerCase();
    setText(clickLower);
  }

  const removeSpace = () => {
    const clickRemoveSpace = text.split(/[ ]+/);
    setText(clickRemoveSpace.join(" "));
  }

  const boldText = () => {
    if(textStyle.fontWeight === "normal" || textStyle.fontStyle === "italic"){
      setStyle({
        fontWeight: "bold"
      })
    }else{
      setStyle({
        fontWeight: "normal"
      })
    }
  }

  const italicText = () => {
    if(textStyle.fontStyle === "normal" || textStyle.fontWeight === "bold"){
      setStyle({
        fontStyle: "italic"
      })
    }else{
      setStyle({
        fontStyle: "normal"
      })
    }
  }

  const clearText = () => {
    const clickClear = '';
    setText(clickClear);
    props.showAlert("warning", "Warning: ", "Your Text Box Has Been Cleared!");
  }

  const copyText = () => {
    let textBox = document.querySelector("#textBox");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
    props.showAlert("success", "Congratulations: ", "Your Selected Text Has Been Copied!");
  }

  const upperTextChange = (e) => {
    setText(e.target.value)
  }

  const [text, setText] = useState("")
  const [textStyle, setStyle] = useState({
    fontWeight: "normal",
    fontStyle: "normal",
  })

  return (
<>
    <div className='container box my-4'>
    <h2 style={{color: props.mode === "light"? "black" : "white"}}>Text Editor</h2>
    <div className="my-4">
    <textarea className={`form-control bg-${props.mode === "light"?"light":"dark"} text-${props.mode === "light"?"dark":"light"}`} id="textBox" style={textStyle} value={text} rows="10" placeholder="Write Something in the Box" onChange={upperTextChange}></textarea>
    </div>
    <span className={`tools text-${props.mode === "light"? "dark":"light"}`}><i className="fa-solid fa-fire"></i> Text Box Editor & Tools</span>
    <div className='textBoxIcons'>
      <div style={{display: props.mode === "light"? "block" : "none"}} onClick={upperText}>{UpperCaseLight}</div>
      <div style={{display: props.mode === "light"? "none" : "block"}} onClick={upperText}>{UpperCaseDark}</div>
      <div style={{display: props.mode === "light"? "block" : "none"}} onClick={lowerText}>{LowerCaseLight}</div>
      <div style={{display: props.mode === "light"? "none" : "block"}} onClick={lowerText}>{LowerCaseDark}</div>
      <div style={{display: props.mode === "light"? "block" : "none"}} onClick={removeSpace}>{RemoveSpaceLight}</div>
      <div style={{display: props.mode === "light"? "none" : "block"}} onClick={removeSpace}>{RemoveSpaceDark}</div>
      <div style={{display: props.mode === "light"? "block" : "none"}} onClick={boldText}>{BoldLight}</div>
      <div style={{display: props.mode === "light"? "none" : "block"}} onClick={boldText}>{BoldDark}</div>
      <div style={{display: props.mode === "light"? "block" : "none"}} onClick={italicText}>{ItalicLight}</div>
      <div style={{display: props.mode === "light"? "none" : "block"}} onClick={italicText}>{ItalicDark}</div>
      <div style={{display: props.mode === "light"? "block" : "none"}} onClick={clearText}>{ClearLight}</div>
      <div style={{display: props.mode === "light"? "none" : "block"}} onClick={clearText}>{ClearDark}</div>
      <div style={{display: props.mode === "light"? "block" : "none"}} onClick={copyText}>{CopyLight}</div>
      <div style={{display: props.mode === "light"? "none" : "block"}} onClick={copyText}>{CopyDark}</div>
    </div>
    <div style={{color: props.mode === "light"? "black" : "white"}} className='previewTotal'>
      <span className='preview'>Estimated Reading Time: {0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} Minutes</span>
      <span className='total'>Total: {text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words - {text.length} Characters</span>
    </div>
    </div>
</>
  )
}