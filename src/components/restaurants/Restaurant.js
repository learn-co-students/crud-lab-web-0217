import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'
class Restaurant extends Component {

  handleClick(){
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}
            <button name="delete" onClick={this.handleClick.bind(this)}/>
            <ReviewInput restaurantId={this.props.restaurant.id}/>
         </li>
      </div>
    );
  }
};

export default Restaurant;
