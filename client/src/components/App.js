import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

const App = props => {
	useEffect(() => {
		props.twitterSearch()
	})
	return <div>Hi this is {props.twitter}</div>
}

const mapStateToProps = ({ twitter }) => {
	return { twitter }
}

export default connect(
	mapStateToProps,
	actions
)(App)
