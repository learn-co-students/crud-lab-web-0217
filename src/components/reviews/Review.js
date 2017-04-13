import React, { Component } from 'react'
import Restaurant from '../restaurants/Restaurant'

class Review extends Component {

	handleOnSubmit() {
		this.props.store.dispatch({
			type: 'DELETE_REVIEW',
			id: this.props.review.id
		})
	}

  render() {
    return (
      <li>
      	{this.props.review.text}
        <button onClick={() => this.handleOnSubmit()}>DELETE</button>
      </li>
    )
  }
}

export default Review