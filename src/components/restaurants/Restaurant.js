import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'
import Reviews from '../reviews/Reviews'

class Restaurant extends Component {
  handleClick(){
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    })
  }
  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={()=>this.handleClick()}>Delete</button>
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
