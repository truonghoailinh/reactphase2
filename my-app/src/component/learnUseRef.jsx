import React, { useState, useRef } from 'react'
function LearnUseRef() {
  const [count, setCount] = useState(60)
  
  let timerId = useRef()
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }
  return (
    <>
      <h1>bai 10 LearnUseRef</h1>
      <h3>{count}</h3>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}> stop</button>
    </>
  )
}
export default LearnUseRef