import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  render() {
    let restaurants = this.props.store.getState().restaurants.map((restaurant) => {
      return <Restaurant store={this.props.store} restaurant={restaurant}/>
    })
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
