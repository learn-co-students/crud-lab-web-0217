import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews = this.props.store.getState().reviews.filter((review) => review.restaurantId === this.props.restaurantId).map((review) => {
      return <Review review={review} reviewText={review.text} store={this.props.store}/>
    })
    return (
      <ul>
        Reviews:
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
