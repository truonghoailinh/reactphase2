import React, {useEffect, useState} from 'react'

const tabs = ['posts', 'comments', 'albums']

function LearnUserEffect() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [countdown, setCountdown] = useState(200)

  useEffect(() => {
    // document.title = title
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(posts => {
      setPosts(posts)
    })
  }, [type])

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200)
    }
    
    window.addEventListener('scroll', handleScroll)

    // cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)

    // cleanup function
    return () => clearInterval(timerId)
  }, [])


  return (
    <div>
      <h1>bài 5 {countdown}</h1>
      {tabs.map(tab => (
        <button key={tab} style={type === tab ? {color: 'red'} : {color: 'black'}} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />

      <ul>
        {
          posts.map(post => (
            <li key={post.id}>{post.title || post.name}</li>
          ))
        }
      </ul>
      {
        showGoToTop && <button style={{position: 'fixed', right: 0, top: 0}}>
          Go To Top
        </button>
      }
    </div>
  )
}
export default LearnUserEffect