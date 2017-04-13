import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput.js'

class Restaurant extends Component {

  handleOnClick(){
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }

  render() {
    return (
      <li>
        {this.props.restaurant.text}
        <button onClick={()=>this.handleOnClick()} />
          <ul>
            <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
          </ul>
      </li>
    );
  }
};

export default Restaurant;
