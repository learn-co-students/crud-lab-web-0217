import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
	constructor() {
		super()

		this.handleDelete = this.handleDelete.bind(this)
	}

	handleDelete() {
		this.props.store.dispatch({type: "DELETE_RESTAURANT", id: this.props.restaurant.id})
	}

  render() {
    return (
      <div>
      	<li>
      		{this.props.restaurant.text}
      	</li>
      	<button onClick={this.handleDelete} />
      	<ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
      </div>
    );
  }
};

export default Restaurant;