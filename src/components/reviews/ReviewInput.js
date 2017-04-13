import React, { Component } from 'react'
import Reviews from './Reviews'


class ReviewInput extends Component {
	constructor() {
		super()
		this.state = {
			text: ''
		}
	}

	handleOnChange(event) {
		this.setState({
			text: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.store.dispatch({
			type: 'ADD_REVIEW',
			review: {
				text: this.state.text,
				restaurantId: this.props.restaurantId,
			}
		})

		this.setState({
			text: ''
		})
	}

  render() {

    return (
      <div>
	      <form onSubmit={(event) => {this.handleSubmit(event)}}>
	        <input type="text" onChange={(event) => {this.handleOnChange(event)}} />
	      	<input type="submit" />
	      </form>
	      <Reviews restaurantId={this.props.restaurantId} store={this.props.store} />
      </div>
    )
  }
}

export default ReviewInput
