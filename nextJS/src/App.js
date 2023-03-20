import React from 'react'
import Home from './Home'
import Speakers from './Speakers'

export const ConfigContext = React.createContext()

const pageShow = pageName => {
  if (pageName === 'Home') return <Home />
  if (pageName === 'Speakers') return<Speakers />
  return <div>Not Found</div>
}

const configValue = {
  showSignMeup: true,
  showSpeakerSpeakingDays: true
}

const App = ({pageName}) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <>
        {pageShow(pageName)}
      </>
    </ConfigContext.Provider>
  )
}

export default App