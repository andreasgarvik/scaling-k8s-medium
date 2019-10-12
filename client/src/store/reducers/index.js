import { combineReducers } from 'redux'
import twitterReducer from './twitterReducer'

const appReducer = combineReducers({
	twitter: twitterReducer
})

const rootReducer = (state, action) => {
	if (action.type === 'NEW_SESSION') {
		state = undefined
	}
	return appReducer(state, action)
}

export default rootReducer
