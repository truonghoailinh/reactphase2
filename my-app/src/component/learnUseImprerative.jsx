import React, { useRef } from 'react'
import Video from './Video'
function LearnImprerative(props, ref) {
  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()
  }
  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>pause</button>
    </>
  )
}

export default LearnImprerative