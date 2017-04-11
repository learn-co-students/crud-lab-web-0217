import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  getReviews() {
    return this.props.store.getState().reviews.filter((r) => {
      return r.restaurantId === this.props.restaurantId
    }).map((review) => {
      return <Review review={review} key={review.id} store={this.props.store} />
    })
  }

  render() {

    return (
      <ul>
        {this.getReviews()}
      </ul>
    );
  }
};

export default Reviews;
