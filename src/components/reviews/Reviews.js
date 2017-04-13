import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {


    let reviewList = this.props.store.getState().reviews.filter((review) => {
      return review.restaurantId === this.props.restaurantId
    })

    let reviews = reviewList.map((review, index) => {
      return <Review review={review} key={index} store={this.props.store} />
    })

    return(
      <ul>
        {reviews}
      </ul>
    );
  }
};
export default Reviews;
