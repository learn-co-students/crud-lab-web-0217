import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants=this.props.store.getState().restaurants.map((rest, index)=>{
      return <Restaurant store={this.props.store} key={index} restaurant={rest}/>
    })
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
