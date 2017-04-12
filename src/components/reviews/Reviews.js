import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const theReviews = this.props.store.getState().reviews.filter(review => this.props.restaurantId == review.restaurantId).map((review, index) => {
      return <Review key={review.id} review={review} store={this.props.store} />
    })
    return (
      <ul>
        {theReviews}
      </ul>
    );
  }
};

export default Reviews;
