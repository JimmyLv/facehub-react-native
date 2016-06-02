import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { userListReducer } from '../reducers/userListReducer'

export default createStore(userListReducer, compose(
  applyMiddleware(thunk)
))