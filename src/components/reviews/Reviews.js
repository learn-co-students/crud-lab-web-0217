import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    let reviewList = this.props.store.getState().reviews.filter((rev) => rev.restaurantId===this.props.restaurantId)
    reviewList = reviewList.map((review, index) => <Review store={this.props.store} review={review} key={index}/>)

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
