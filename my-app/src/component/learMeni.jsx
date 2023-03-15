import React, {memo} from 'react'
// tranh render component k can thiet, neu k có thay doi component
function LearnMemo(props) {
  return(
    <>
      <h1>bai 11</h1>
      <button onClick={props.onIncrease}>click me</button>
    </>
  )
}
export default memo(LearnMemo)
