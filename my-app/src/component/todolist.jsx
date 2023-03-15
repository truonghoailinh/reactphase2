import React, { useState } from 'react'
function TodoList() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs')) ? JSON.parse(localStorage.getItem('jobs')) : []
    return storageJobs
  })

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }
  return(
    <>
      <div style={{ padding: 32}}>
        <h1>bai 3 TodoList</h1>

        <input value={job} onChange={e => setJob(e.target.value)} type="text" />
        <button onClick={handleSubmit}>ADD</button>

        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default TodoList