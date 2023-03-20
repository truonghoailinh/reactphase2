import React from 'react'
function Menu() {
  return (
    <>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className='nav-link'>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/speakers" className='nav-link'>
                Speakers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Menu