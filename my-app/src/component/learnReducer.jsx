import React, {useReducer} from 'react'
import { DOWN_ACTION, UP_ACTION } from './todo/constants'
import reducer, {reducerJob, initState, initStateJob} from './todo/reducer'
import { setJob, addJob, deleteJob } from './todo/action'
function LearnReduce() {
  const [count, dispatch] = useReducer(reducer, initState)
  const [state, dispatch2] = useReducer(reducerJob, initStateJob)
 
  const { job, jobs } = state

  const handleAddJob = () => {
    dispatch2(addJob(job))
    dispatch2(setJob(''))
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>
        DOWN
      </button>
      <button onClick={() => dispatch(UP_ACTION)}>
        UP
      </button>

      <br />
      <h3>to do</h3>
      <input type="text" value={job} placeholder='Enter todo...' onChange={e => {
        dispatch2(setJob(e.target.value))
      }} />
      <button onClick={handleAddJob}>add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}> {job} <span onClick={() => dispatch2(deleteJob(index))}> &times;</span></li>
        ))}
      </ul>
    </>
  )
}
export default LearnReduce