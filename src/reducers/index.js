import { combineReducers } from 'redux'
import passwordReducer from './Password-reducer'

export default combineReducers({
  passwords: passwordReducer
})