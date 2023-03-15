import React, {useState, createContext} from 'react'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  
  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const value = {
    theme,
    handleTheme
  }
  return (
    <>
      <h1>ThemeProvider</h1>
      <ThemeContext.Provider value={value}>
        { children }
      </ThemeContext.Provider>
    </>
  )   
}


export {ThemeContext, ThemeProvider}