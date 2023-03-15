import React, { useState } from 'react'
function Counter() {
  const [counter, setCouter] = useState(1)
  const [info, setInfo] = useState({
    name: 'Linh',
    age: 18
  })
  
  const handleIncrease = () => {
    setCouter(counter + 1)
  }
  const handleChange = () => {
    setInfo({...info, bio: 'bio ne'})
  }
  return (
    <>
    <div className="counter" style={{ padding: 20}}>
      <h1>bai 1</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <pre>{JSON.stringify(info)}</pre>
      <button onClick={handleChange}>update</button>
    </div>
    </>
  )
}
export default Counter