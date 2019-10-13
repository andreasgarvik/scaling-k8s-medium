import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

class App extends React.Component {
	componentDidMount = () => {
		this.props.twitterSearch()
	}
	render = () => {
		return <div>The calculation took {this.props.twitter} ms</div>
	}
}

const mapStateToProps = ({ twitter }) => {
	return { twitter }
}

export default connect(
	mapStateToProps,
	actions
)(App)
