import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurantList = this.props.store.getState().restaurants.map((restaurant, index) => <Restaurant restaurant={restaurant} key={index} store={this.props.store}/>)

    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;
