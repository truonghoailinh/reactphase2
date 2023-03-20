import React, { useState, useContext } from 'react'
import { ConfigContext } from './App'
const SignMeup = ({ signupCallback }) => {
  const [email, setEmail] = useState('')
  
  const context = useContext(ConfigContext)

  return context.showSignMeup === false ? null : (
    <div className="container">
      <div>
        <div className="content">
          <input type="email" name="email" placeholder='Enter Email' id="" />
          <br />
          <button
          disabled={!email.includes('@')}
          onClick={() => {
            signupCallback(email)
            setEmail('')
            alert('signup confirmed')
          }}
          className='btn' type='submit'>Get Updates</button>
        </div>
      </div>
    </div>
  )
}

export default SignMeup