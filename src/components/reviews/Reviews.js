import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviewList = this.props.store.getState().reviews.filter((review) => {
      return review.restaurantId === this.props.restaurantId
    })

    let reviewThings = reviewList.map((review) => {
    return <Review review={review} store={this.props.store} key={review.id}/>
    })
    return (
      <ul>
        {reviewThings}
      </ul>
    );
  }
};

export default Reviews;
