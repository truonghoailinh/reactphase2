import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'
function LearnContext() {
  const context = useContext(ThemeContext)
  const theme = context.theme
  return (
    <div>
      <h1>LearnContext</h1>
      <button 
      style={{ backgroundColor: theme === 'dark' ? '#eee' : 'white'}}
      onClick={context.handleTheme}>
        Toggle theme
      </button>
    </div>

  )
}

export default LearnContext