import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }
  onClick(event) {
    event.preventDefault()
    this.props.store.dispatch({type:'DELETE_RESTAURANT', id: this.props.restaurant.id})
  }
  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}
        </li>
        <button onClick={this.onClick}>DELETE</button>

        <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
      </div>
    );
  }
};

export default Restaurant;
