import React, { useState } from 'react'

function InputElement() {
  const [inputText, setInputText] = useState('')
  const [historyList, setHistoryList] = useState([])
  
  return (
    <>
      <input type="text" 
        onChange={(e) => {
          setInputText(e.target.value)
          setHistoryList([...historyList, e.target.value])
        }}
        placeholder="Enter text..."
      />
      <br />
      {inputText}
      <hr /><br />
      <ul>
        {historyList.map((rec) => {
          return <div>{rec}</div>
        })}
      </ul>
    </>
  )
}

export default InputElement