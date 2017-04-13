import React, { Component } from 'react'
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  
	handleOnClick() {
		this.props.store.dispatch({
			type: 'DELETE_RESTAURANT',
			id: this.props.restaurant.id
		})
	}

  render() {
    return (

      <div>
      	<li>
      	{this.props.restaurant.text}
      	<button onClick={() => this.handleOnClick()} >DELETE</button>
      	 <ul>
          <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
         </ul>
        </li>

      </div>
    )  }
}
export default Restaurant