import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    let restaurantList = this.props.store.getState().restaurants.map((restaurant) => {
      return <Restaurant restaurant={restaurant} store={this.props.store} key={restaurant.id} />
    })
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;
