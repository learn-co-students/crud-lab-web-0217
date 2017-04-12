import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

  	const reviews = this.props.store.getState().reviews
  	.filter((review) => {return review.restaurantId === this.props.restaurantId })
  	.map((review, index) => {
  		return <Review key={index} store={this.props.store} review={review} /> 
  	})
  		

    return (
    <div>
      <ul>
        {reviews}
      </ul>
    </div>
    );
  }
};

export default Reviews;