import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  listReviews() {
    let list =  this.props.store.getState().reviews.filter((r) => {
      return r.restaurantId === this.props.restaurantId
    })
    return list.map((r) => {
      return <Review review={r} key={r.id} store={this.props.store} />
    })
  }
  render() {
    return (
      <ul>
        {this.listReviews()}
      </ul>
    );
  }
};

export default Reviews;
