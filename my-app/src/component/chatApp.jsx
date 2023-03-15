import React, { useEffect, useState } from 'react'

const lessons = [
  {
    id: 1,
    name: 'ReactJs là gì?'
  },
  {
    id: 2,
    name: 'SPA/MPA'
  },
  {
    id: 3,
    name: 'Arrow function'
  }
]

function ChatApp() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({detail}) => {
      console.log(detail)
    }
    window.addEventListener(`lesson-${lessonId}`, handleComment)
    return (() => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment)
    })
  }, [lessonId])

  return (
    <>
      <h1>Bài 8 ChatApp</h1>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id} style={{ color: lessonId === lesson.id ? 'red': '#333' }} onClick={() => setLessonId(lesson.id)}>
            {lesson.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ChatApp