import React from 'react'
import useSpeakerDateManager from './useSpeakerDataManager'

export const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

  const {isLoading, speakerList, favoriteClickCount, incrementFavoriteClickCount, toggleSpeakerFavorite} = useSpeakerDateManager()

  const provider = { isLoading, speakerList, favoriteClickCount, incrementFavoriteClickCount, toggleSpeakerFavorite }
  return (
    <GlobalContext.Provider value={provider}>
      {children}
    </GlobalContext.Provider>
  )
}