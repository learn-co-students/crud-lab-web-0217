import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  reviewsFor(reviews, restaurantId) {
    if (reviews)
      return reviews.filter(r => r.restaurantId === restaurantId)
    else {
      return []
    }
  }

  render() {
    let { restaurants } = this.props.store.getState()
    let { reviews } = this.props.store.getState()
    return(
      <ul>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            reviews={this.reviewsFor(reviews, restaurant.id)}
            store={this.props.store}
          />
        ))}
      </ul>
    );
  }
};

export default Restaurants;
