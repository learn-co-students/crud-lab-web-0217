import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    
    const associatedReviews = this.props.store.getState().reviews
    .filter((review)=>{
      return review.restaurantId === this.props.restaurantId
    })

    const reviews = associatedReviews.map((review, index)=>{
      return <Review key={index} review={review} store={this.props.store}/>
    })

    return(
      <div>
        <ul>
          {reviews}
        </ul>
      </div>
    );
  }
};

export default Reviews;
