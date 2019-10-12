import axios from 'axios'
import { TWITTER_SEARCH } from './types'

export const twitterSearch = () => async dispatch => {
	const res = await axios.get('/api/twitter')

	dispatch({
		type: TWITTER_SEARCH,
		payload: res.data
	})
}
