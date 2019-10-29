import React from 'react'
import axios from 'axios'

class App extends React.Component {
	state = { time: '' }

	componentDidMount = async () => {
		const res = await axios.get('/api/')
		this.setState({ time: res.data })
	}
	render = () => {
		return <div>The calculation took {this.state.time} ms</div>
	}
}

export default App
