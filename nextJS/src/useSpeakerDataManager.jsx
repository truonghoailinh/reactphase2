import { useEffect, useReducer} from 'react'
import speakersReducer from './speakersReducer'
import speakerData from './SpeaderData'
import axios from 'axios'

function useSpeakerDateManager() {
  const [{ isLoading, speakerList}, dispatch] = useReducer(speakersReducer, {isLoading: true, speakerList: []})

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function() {
      axios.put(`/api/speakers/${speakerRec.id}`, {...speakerRec, favorite: !speakerRec.favorite,})
      speakerRec.favorite === true ?
        dispatch({type: 'unfavorite', id: speakerRec.id}) :
          dispatch({type: 'favorite', id: speakerRec.id})
    }
    updateData()
  }

  useEffect(() => {
    // new Promise(function(resolve) {
    //   setTimeout(function() {
    //     resolve()
    //   }, 1000)
    // }).then(() => {
    //   dispatch({
    //     type: 'setSpeakerList',
    //     data: speakerData
    //   })
    // })
    const fetchData = async function() {
      let result = await axios.get('api/speakers')
      dispatch({type: 'setSpeakerList', data: result.data})
    }
    fetchData()
    return () => {
      console.log('cleanup')
    }
  }, [])
  return {isLoading, speakerList, toggleSpeakerFavorite}
}

export default useSpeakerDateManager