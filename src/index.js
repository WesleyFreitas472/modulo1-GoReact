import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'

import Button from './Button'
import './style.scss'


class App extends React.Component {
	state = {
		counter: 0
	}

	handleClick = () => {
		this.setState({counter: this.state.counter += 1})
	}

	render(){
		return (
			<div>
				<h1>Hello World</h1>
				<h2>{this.state.counter}</h2>
				<Button onClick={this.handleClick}>Enviar</Button>
			</div>
		);
	}
}

render(<App />,document.getElementById('app'))
