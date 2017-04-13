import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants=this.props.store.getState().restaurants.map((rest, index) => {
      return <Restaurant restaurant={rest}
                         key={index}
                         store={this.props.store}
                         />
    })

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
