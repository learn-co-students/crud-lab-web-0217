import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map((rest)=>{
          return <Restaurant
                    store={this.props.store}
                    restaurant={rest}
                  />
        })}
      </ul>
    );
  }
};

export default Restaurants;
