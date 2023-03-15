import React, { useRef, useEffect, useState } from 'react'

function TogglerScroll({ primaryImg, secondaryImg }) {
  
  const imageRef = useRef(null)

  const [isLoading, setIsLoading] = useState(true)

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect()
    return rect.top >=0 && rect.bottom <= window.innerHeight
  }

  const [inView, setInView] = useState(false)

  useEffect(() => {
    setIsLoading(false)
    setInView(isInView())
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = () => {
    setInView(isInView())
  }
  if (isLoading) return null;
  return (
    <>
      <hr />
      <br />
      <h2>Scroll</h2>
      <img src={ isLoading ? "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" : inView ? secondaryImg : primaryImg} ref={imageRef} alt=""
      />
    </>
  )
}

export default TogglerScroll