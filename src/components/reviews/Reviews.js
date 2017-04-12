import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviewList = this.props.store.getState().reviews.map((review, index) => {
      if(review.restaurantId === this.props.restaurantId){
        return <Review key={index} review={review} store={this.props.store} />
      }
    })
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
