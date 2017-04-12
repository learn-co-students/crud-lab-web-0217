import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    let restaurantList = this.props.store.getState().restaurants.map((restaurant, index) => <Restaurant key={index} restaurant={restaurant} store={this.props.store} />)
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;
