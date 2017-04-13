import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews
    const validReviews = reviews.filter((review)=> review.restaurantId === this.props.restaurantId)

    let filteredReviews = validReviews.map((review, index)=>{
      return  <Review
                key={index}
                review={review}
                restaurantId={this.props.restaurantId}
                store={this.props.store}
                />
    })

    return (
      <ul>
        {filteredReviews}
      </ul>
    );
  }
};

export default Reviews;
