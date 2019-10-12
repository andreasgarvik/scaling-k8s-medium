import { TWITTER_SEARCH } from '../actions/types'

export default (state = '', action) => {
	switch (action.type) {
		case TWITTER_SEARCH:
			return action.payload
		default:
			return state
	}
}
