import { combineReducers } from "redux";
import candyReducer from './candies'


const rootReducer = combineReducers({
  candy: candyReducer
})

export default rootReducer
