import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    const { restaurant, store } = this.props
    return (
      <div>
        <li>{restaurant.text}</li>
        <button onClick={this.handleClick} ></button>
        <ReviewInput store={store} restaurantId={restaurant.id} />
      </div>
    );
  }
};

export default Restaurant;
