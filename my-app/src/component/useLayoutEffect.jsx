import React, {useState, useLayoutEffect} from 'react'
function UseLayoutEffectL() {
  const [count, setCount] = useState(0);
  
  useLayoutEffect(() => {
    if(count > 3) {
      setCount(0)
    }
  }, [count])
  
  const handleRun = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1>bai 9 UseLayoutEffect</h1>
      <h3>{count}</h3>
      <button onClick={handleRun}>Run</button>
    </>
  )
}
export default UseLayoutEffectL