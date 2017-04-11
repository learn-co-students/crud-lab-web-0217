import React, { Component } from 'react';

class Review extends Component {
	constructor() {
		super()

		this.handleDelete = this.handleDelete.bind(this)
	}

	handleDelete() {
		this.props.store.dispatch({
			type: "DELETE_REVIEW",
			id: this.props.review.id
		})
	}

  render() {
    return (
    	<div>
      <li>
      	{this.props.review.text}
      </li>
      <button onClick={this.handleDelete} />
      </div>
    );
  }
};

export default Review;