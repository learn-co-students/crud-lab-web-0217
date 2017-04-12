import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.map((r, idx) => {
      if (r.restaurantId === this.props.restaurantId) {
        console.log(r, this.props.restaurantId)
        return <Review key={idx} review={r} restaurantId={this.props.restaurantId} store={this.props.store}/>
      }
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
