import React, { Component } from 'react';

class RestaurantInput extends Component {
	constructor() {
		super()

		this.state = {
			text: ''
		}

		this.handleInput = this.handleInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInput(event) {
		this.setState({
			text: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.store.dispatch({type: 'ADD_RESTAURANT', text: this.state.text})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleInput} value={this.state.text} />
				</form>
			</div>
		)
	}
};

export default RestaurantInput;
