import React from 'react'

function speakersReducer (state, action) {
  function updateFavorite(favoriteValue) {
    return state.speakerList.map((item, index) => {
      if (item.id === action.id) {
        return {...item,favorite: favoriteValue}
      }
      return item
    })
  }
 switch (action.type) {
  case 'setSpeakerList': {
    return { ...state, speakerList: action.data, isLoading: false }
  } 
  case 'favorite': {
   return {...state, speakerList: updateFavorite(true)}
  }
  case 'unfavorite': {
    return {...state, speakerList: updateFavorite(false)}
  }
  case 'incrementFavoriteClickCount': {
    return {...state, favoriteClickCount: state.favoriteClickCount + 1}
  }
  default:
    return state
 }
}

export default speakersReducer