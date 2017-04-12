import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews
    .filter(r => r.restaurantId === this.props.restaurantId)
    .map((r, i) => {
      return <Review key={i} store={this.props.store} review={r} />
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
