import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {

  render() {
  	let filteredRev = this.props.store.getState().reviews.filter((revObj) => revObj.restaurantId === this.props.restaurantId)
  	let allReviews = filteredRev.map((el, idx) => {
  		return <Review review={el} store={this.props.store} key={idx} />
  	})
    return (
      <ul>
        {allReviews}
      </ul>
    )
  }
}

export default Reviews