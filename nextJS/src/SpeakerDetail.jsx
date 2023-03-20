import React, { memo } from 'react'
import TogglerScroll from './TogglerScroll'

const SpeakersDetail = ({id, firstName, lastName, favorite, bio, onHeartFavoriteHandler}) => {
  console.log(id, firstName, lastName)
  return (
    <div className="col-4 cardmin">
      <div className="card">
        <TogglerScroll primaryImg="https://source.unsplash.com/user/c_v_r/500x500" secondaryImg="https://source.unsplash.com/user/c_v_r/700x500" />
        <div className="card-body">
          <h4 className="card-title">
            <button data-sesionid={id}
            style={{height: 30, width: 30, marginRight: 10}}
              className={favorite ? 'heartedbutton btn-primary' : 'heartdarkbutton btn-info'}
              onClick={(e) => {
                onHeartFavoriteHandler(e, !favorite)
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