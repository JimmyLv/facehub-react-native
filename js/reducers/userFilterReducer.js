import { FILTER_USER } from '../actions/userFilterAction'

export default function filterReducer(state = '', action) {
  switch (action.type) {
    case FILTER_USER:
      return action.payload
    default:
      return state
  }
}