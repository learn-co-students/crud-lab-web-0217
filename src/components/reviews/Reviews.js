import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.store.getState().reviews
          .filter((rev)=>rev.restaurantId===this.props.restaurantId)
          .map((rev, index)=>{
            return <Review
                      store={this.props.store}
                      review={rev}
                      reviewId={rev.id}
                      key={index}
                      />
          })}
      </ul>
    );
  }
};

export default Reviews;
