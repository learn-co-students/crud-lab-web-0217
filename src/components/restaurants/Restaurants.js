import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  listRestaurants() {
    return this.props.store.getState().restaurants.map((r) => {
      return <Restaurant restaurant={r} store={this.props.store} key={r.id}/>
    })
  }
  render() {
    return(
      <ul>
        {this.listRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
