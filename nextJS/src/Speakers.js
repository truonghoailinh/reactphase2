import React, {useState, useEffect, useContext, useReducer, useCallback, useMemo} from 'react'
import Menu from './Menu'
import Header from './Header'
import speakerData from './SpeaderData'
import SpeakersDetail from './SpeakerDetail'
import speakersReeducer from './speakersReducer'

import { ConfigContext } from './App'
function Speakers() {
  const [speakingSun, setSpeakingSun] = useState(true)
  const [speakingSat, setSpeakingSat] = useState(true)
  // const [listData, setListDaTa] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  function SpeakersReucer(state, action) {
    function updateFavorite(favoriteValue) {
      return state.map((item, index) => {
        if (item.id === action.sectionId) {
          return {...item,favorite: favoriteValue}
        }
        return item
      })
    }
   switch (action.type) {
    case 'setListDaTa': {
      return action.data
    } 
    case 'favorite': {
     return updateFavorite(true)
    }
    case 'unfavorite': {
      return updateFavorite(false)
    }
    default:
      return state
   }
  } 

  const [listData, dispatch] = useReducer(SpeakersReucer, [])
  
  const context = useContext(ConfigContext)

  useEffect(() => {
    setIsLoading(true)
    new Promise(function(resolve) {
      setTimeout(function() {
        resolve()
      }, 1000)
    }).then(() => {
      setIsLoading(false)
      const speakerListServeFilter = speakerData.filter(({sat, sun}) => {
        return (speakingSat && sat) || (speakingSun && sun);
      })
      // setListDaTa(speakerListServeFilter)
      dispatch({
        type: 'setListDaTa',
        data: speakerListServeFilter
      })
    })
    return () => {
      console.log('cleanup')
    }
  }, [])

  const handleChangeSat = () => {
    setSpeakingSat(!speakingSat)
  }
  const handleChangeSun = () => {
    setSpeakingSun(!speakingSun)
  }

  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sectionId = parseInt(e.target.attributes['data-sesionid'].value)

    dispatch({type: favoriteValue === true ? 'favorite' : 'unfavorite', sectionId})

    // )
  }, [])

  const newSpeakerList = useMemo(() => listData
  .filter(
    ({sat, sun}) => (speakingSat && sat) || (speakingSun && sun))
  )
  .sort(function(a, b) {
    if (a.firstName < b.firstName) {
      return -1
    }
    if (a.firstName > b.firstName) {
      return 1
    }
    return 0
  }, [speakingSat, speakingSun])
  const speakerListFiltered = isLoading
    ? []
    : newSpeakerList 

  if(isLoading) return <div>Loading...</div>
  return(
    <>
      <Header />
      <Menu />
      <div className='container'>
        <h2>Speakers</h2>
        <div className="btn-toolbar margintopbottom5 checkbox-bigger">
          {context.showSpeakerSpeakingDays === false ? null : (
          <div className="hiden">
            <div className="form-check-inline">
              <input type="checkbox" className='form-check-input' 
                onChange={handleChangeSat}
                checked={speakingSat}
              /> Saturday Speakers
            </div>
            <div className="form-check-inline">
              <input type="checkbox" className='form-check-input' 
                onChange={handleChangeSun}
                checked={speakingSun}
              /> Sunday Speakers
            </div>
          </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(({id, firstName, lastName, bio, favorite}) => {
              return (
                <SpeakersDetail key={id} id={id} favorite={favorite} firstName={firstName} lastName={lastName} bio={bio} onHeartFavoriteHandler={heartFavoriteHandler}/>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Speakers