import React, { useState } from 'react'
const gifts = [
  'Iphone 14',
  'Macbook pro',
  'Ipad pro'
]

const courses = [
  {
    id: 1,
    name: 'HTML CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJs'
  }
]

function TwoWay() {
  const [gift, setGift] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState([])

  console.log(checked)

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })

  }
  const handleSubmit = () => {
    console.log({
      name,
      email
    })
    console.log({ids: checked})
  }
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }
  return (
    <>
      <h1>bài 2 TwoWay</h1>
      <h2>{gift ? gift : 'Chưa có phần thưởng'}</h2>
      <button onClick={randomGift}>lấy thưởng</button>

      <div style={{padding: 32}}>
        <input value={name} type="text" onChange={e => setName(e.target.value)}/>
        <br></br>
        <input value={email} type="text" onChange={e => setEmail(e.target.value)}/>
        <br></br>


      {courses.map(course => (
        <div key={course.id}>
          <input checked={checked.includes(course.id)} onChange={() => handleCheck(course.id)} type="checkbox"/>
          {course.name}
        </div>
      ))}

        <button onClick={handleSubmit}>Change</button>
      </div>
    </>
  )
}
export default TwoWay