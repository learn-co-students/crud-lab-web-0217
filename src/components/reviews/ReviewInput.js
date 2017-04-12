import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      id: this.props.restaurantId,
      review: {
        text: this.state.text
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <label>Review</label>
          <input type="text" onChange={(e) => {this.handleChange(e)}}/>
          <input type="submit" />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
