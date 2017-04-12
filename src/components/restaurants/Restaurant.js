import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    })
  }

  render() {
    console.log(this.props.restaurant)
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <button onClick={() => this.handleOnClick()}>Delete</button>
        <ReviewInput restaurantId={this.props.restaurant.id}/>
      </div>
    );
  }
};

export default Restaurant;
