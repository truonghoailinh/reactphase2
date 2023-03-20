import React, {useState, useContext, useCallback, useMemo} from 'react'
import Menu from './Menu'
import Header from './Header'
import SpeakersDetail from './SpeakerDetail'
import { ConfigContext } from './App'
import { GlobalContext } from './GlobalState'

function Speakers() {
  const [speakingSun, setSpeakingSun] = useState(true)
  const [speakingSat, setSpeakingSat] = useState(true)

  const context = useContext(ConfigContext)

  const {isLoading, speakerList, toggleSpeakerFavorite} = useContext(GlobalContext)

  const handleChangeSat = () => {
    setSpeakingSat(!speakingSat)
  }
  const handleChangeSun = () => {
    setSpeakingSun(!speakingSun)
  }

  const heartFavoriteHandler = useCallback((e, speakerRec) => {
    e.preventDefault();
    toggleSpeakerFavorite(speakerRec)

    // )
  }, [])

  const newSpeakerList = useMemo(() => speakerList
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
            {speakerListFiltered.map((speakerRec) => {
              return (
                <SpeakersDetail key={speakerRec.id} speakerRec={speakerRec} onHeartFavoriteHandler={heartFavoriteHandler}/>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Speakers