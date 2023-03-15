import { SET_JOB, ADD_JOB, DELETE_JOB, UP_ACTION, DOWN_ACTION } from "./constants"

export const initState = 0
export const initStateJob = {
  job: '',
  jobs: []
}
const reducer = (state, action) => {
  switch(action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}


export const reducerJob = (state, action) => {

  let newState
  switch(action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      newState = {
        ...state,
        jobs: newJobs
      }
      break
    default:
      throw new Error('Invalid action')
  }
  console.log('New State: ', newState);
  return newState
}

export default reducer