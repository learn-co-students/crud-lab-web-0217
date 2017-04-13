import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  reviewsFor(reviews, restaurantId){
    return reviews.filter(r => r.restaurantId == restaurantId)
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
            store={this.props.store}
            reviews={this.reviewsFor(reviews, restaurant.id)}
            />
        ))}
      </ul>
    );
  }
};

export default Restaurants;
