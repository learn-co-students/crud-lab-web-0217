import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {reviews.map(review => <Review review={review} store={this.props.store}/>)}
      </ul>
    );
  }
};

export default Reviews;
