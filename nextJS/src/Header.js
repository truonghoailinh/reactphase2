import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'
import logo from './logo.svg'
import SignMeup from './SignMeup'
export default function Hedaer() {

  const signupCallback = (email) => {
    return console.log(`sign up called with email ${email}`);
  }

  const {favoriteClickCount} =  useContext(GlobalContext)

  return (
    <>
      <div className="jumbotron jumbotronheight">
        <div className="row">
          <div className="col-12 col-sm-4 text-center">
            <h6 className="text-uppercase">October 16-03 2023</h6>
            <h6 className="text-uppercase">San Jose, Calofornia</h6>
            <h3>Count Click {favoriteClickCount}</h3>
          </div>

          <div className="col-12 col-sm-8 text-lg-right">
            <img width={200} src={logo} alt="" />
          </div>
          <h2>Silicon Valley Code Camp</h2>
          <div className="row col-12 text-lg-right">
            <SignMeup signupCallback={signupCallback} />
          </div>
        </div>
      </div>
    </>
  )
}