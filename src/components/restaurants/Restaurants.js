import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
  	let allRestaurants = this.props.store.getState().restaurants.map((el, idx) => {
  		return <Restaurant key={idx} restaurant={el} store={this.props.store} />
  	})
    return(
      <ul>
        {allRestaurants}
      </ul>
    )
  }
}

export default Restaurants