import React, { Component } from 'react';

class Review extends Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }
  onClick(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id,
      retaurantId: this.props.review.restaurantId
    })
  }
  render() {
    return (
      <li>
      {this.props.review.text}
      <button onClick={this.onClick}>DELETE</button>
      </li>
    );
  }
};

export default Review;
