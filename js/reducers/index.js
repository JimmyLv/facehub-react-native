import { combineReducers } from 'redux'
import userListReducer from './userListReducer'
import filterReducer from './userFilterReducer'

export default combineReducers({
  userList: userListReducer,
  filter: filterReducer
})