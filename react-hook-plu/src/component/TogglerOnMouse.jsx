import React, { useRef } from 'react'

function TogglerOnMouse({ primaryImg, secondaryImg }) {
  
  const imageRef = useRef(null)

  return (
    <>
      <hr />
      <br />
      <h2>Mousee</h2>
      <img onMouseOver={() => {
        imageRef.current.src = secondaryImg
      }} onMouseOut={() => {
        imageRef.current.src = primaryImg
      }}
        src={primaryImg} ref={imageRef} alt=""
      />
    </>
  )
}

export default TogglerOnMouse