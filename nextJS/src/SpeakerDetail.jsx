import React, { memo, useContext } from 'react'
import TogglerScroll from './TogglerScroll'
import { FavoriteClickCountContext } from './FavoriteClickCountContext'

const SpeakersDetail = ({speakerRec, onHeartFavoriteHandler}) => {
  const {id, firstName, lastName, favorite, bio} = speakerRec
  console.log(id, firstName, lastName)

  const {incrementFavoriteClickCount} =  useContext(FavoriteClickCountContext)

  return (
    <div className="col-4 cardmin">
      <div className="card">
        <TogglerScroll primaryImg="https://source.unsplash.com/user/c_v_r/500x500" secondaryImg="https://source.unsplash.com/user/c_v_r/700x500" />
        <div className="card-body">
          <h4 className="card-title">
            <button
            style={{height: 30, width: 30, marginRight: 10}}
              className={favorite ? 'heartedbutton btn-primary' : 'heartdarkbutton btn-info'}
              onClick={(e) => {
                onHeartFavoriteHandler(e, speakerRec)
                incrementFavoriteClickCount()
              }}>
            </button>
            <span>
              {firstName} {lastName} 
            </span>
          </h4>
          <span>{bio}</span>
        </div>
      </div>
    </div>
  )
} 

export default memo(SpeakersDetail)