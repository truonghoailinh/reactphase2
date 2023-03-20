import React from 'react'
import Menu from './Menu'
import Header from './Header'
function Home() {
  return(
    <>
      <Header />
      <Menu />
      <div className='container'>
        <div className="row">
          <div className="col marrgintopbottom">
            <h2>Home</h2>
            <div className="margintopbottom20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magnam porro maiores, expedita minima dolorem natus, optio blanditiis iure laboriosam omnis consequuntur.
              Tempora sit nemo, at rem asperiores quae ea! Ab.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home