import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
	const reviewsList = this.props.store.getState().reviews.filter(r => {
  		return r.restaurantId == this.props.restaurantId
  	}).map(review => {
  		return <Review store={this.props.store} review={review} />
  	})
    return (
      <ul>
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;