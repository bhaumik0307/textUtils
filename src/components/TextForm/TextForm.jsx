import React, { useCallback, useEffect, useRef, useState } from 'react'
import {encode} from 'js-base64'
const TextForm = () => {

    const [text, setText] = useState("")

    const [disabled, setDisabled] = useState(true)

    const [listening, setListening] = useState(false)
    const textRef = useRef(null)
    useEffect(()=>{
      if(text.length===0){
        setDisabled(true)
      }
      else{
        setDisabled(false)
      }
    }, [text])

    const handleUpper = ()=>{
        const newText = text.toUpperCase()
        setText(newText)
        
    }

    const handleLower = () => {
        const newText = text.toLowerCase()
        setText(newText)
    }

    const handleSpace = () => {
        const newText = text.split(" ").map(word => word.trim())
        .filter(word => word!=="")
        .join(" ")
        setText(newText)
    }

    const handleSentence = () => {
      const newText = text.split(".").map(word => word.trim())
      .map((word) => (word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()))
      .filter(word => word!=="")
      .join(". ")
      setText(newText)
    }

    const handleClear = () => {
      const confirmClear = confirm("Do you want to clear the text")
      if(confirmClear){
        setText("")
      }
    }

    const handleCopy = useCallback(() => {
      textRef.current?.select()
      window.navigator.clipboard.writeText(text)
    }, [text])
    
    const calculateCharacter = (t) => {
      const newText = t.split(".").map(word => word.trim())
      .filter(word => word!=="")
      .join(". ")
      return newText.length
    }

    const calculateWords = (t) => {
      const lis = t.split(/\s+/).map(word => word.trim())
      .filter(word => word!=="")
      return lis.length
    }

    const handleBase64 = () => {
      const base64Encoded = encode(text)
      setText(base64Encoded)
    }

    const handlePaste = () => {
      window.navigator.clipboard.readText()
      .then((t) => {
        setText((text) => text+t)
      })
      .catch((err) => {
        console.error("failed to paste from clipboard", err)
      })
        
    }
    
    const handleLinks = () => {
      const urlRegex = /(https?:\/\/[^\s]+)/g

      const urls = text.match(urlRegex)
      if(urls){
        setText(urls.join("\n"))
      }
      else{
        setText("")
      }
    }
    
    const handleExtractNumber = () => {
      const newText = text.split("").filter(char => !isNaN(char)).join("")
      setText(newText)
    }

    const handleExtractText = () => {
      const newText = text.split("").filter(char => /[a-z]/i.test(char)).join("")
      setText(newText)
    }
    
    const handleRemoveSpecial = () => {
      const newText = text.split("").filter(char => /[\w\s]/.test(char)).join("")
      setText(newText)
    }

    const handleReverse = () => {
      const newText = text.split("").reverse().join("")
      setText(newText)
    }
    
    const handleReplace = () => {
      const textToReplace = prompt("enter text to replace")
      const textToReplaceWith = prompt("enter text to replace with")
      const newText = text.replace(new RegExp(textToReplace, 'g'), textToReplaceWith)
      setText(newText)
    }

    const handleListen = () => {
      const speech = new SpeechSynthesisUtterance()
      speech.text = text
      setListening(true)
      window.speechSynthesis.speak(speech)
      speech.addEventListener("end", () => {
        setListening(false)
      })
    }

    const handleStopListening = () => {
      setListening(false)
      window.speechSynthesis.cancel()
    }

  return (
    <div className="w-full flex flex-grow justify-center py-6">
    <div className="flex flex-col items-start w-4/5">
        <label htmlFor="textarea" className="text-4xl block py-5">Enter the text to analyse</label>
      
      <textarea 
        type="text" 
        id="textarea"
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        ref={textRef}
        className="h-56 w-full block border-solid border-2 border-gray-600 p-2 align-center
        focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      <div className="my-6 flex flex-row flex-wrap gap-1">
      <button 
        onClick={handleUpper}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Convert To UpperCase</button>

        <button 
        onClick={handleLower}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Convert To LowerCase</button>

        <button 
        onClick={handleSentence}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Convert To Sentence Case</button>

        <button 
        onClick={handleSpace}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Remove Spaces</button>

        <button 
        onClick={handleBase64}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Encode to base64</button>

        <button 
        onClick={handleClear}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Clear</button>

        <button 
        onClick={handleCopy}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Copy to clipboard</button>


        <button 
        onClick={handlePaste}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        >Paste from clipboard</button>

        <button 
        onClick={handleLinks}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Extract links</button>

        <button 
        onClick={handleExtractText}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Extract text</button>

        <button 
        onClick={handleExtractNumber}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Extract numbers</button>

        <button 
        onClick={handleRemoveSpecial}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Remove Special characters</button>

        <button 
        onClick={handleReverse}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Reverse Text</button>

        <button 
        onClick={handleReplace}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >Replace text</button>

        <button 
        onClick={listening?handleStopListening:handleListen}
        className="px-5 py-2 bg-blue-600 text-white rounded-sm mr-4
        active:bg-blue-700 active:scale-95 disabled:bg-gray-500 
        disabled:cursor-not-allowed disabled:scale-100 mb-4"
        disabled={disabled}
        >{listening?"Stop Listen":"Listen Now"}</button>

        </div>

        <div className="w-full">
            <h1 className="text-left text-2xl my-2">Your Text Summary</h1>
            <p className="text-left">{calculateWords(text)} words and {calculateCharacter(text)} characters</p>
            <p className="text-left">{0.008 * calculateWords(text)} Minutes read</p>
            <h1 className="text-left text-2xl my-2 w-full">Preview</h1>
            <p className="text-left w-full mb-6">{text===""?"Your text preview will be displayed here.":text}</p>
        </div>
        </div>
      </div>

  )
}

export default TextForm
