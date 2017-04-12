import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({text: event.target.value})
  }
  onSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch(
      {type: 'ADD_REVIEW',
      text: this.state.text,
      restaurantId: this.props.restaurantId}
    )
    this.setState({text: ''})

  }
  render() {
    const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId == this.props.restaurantId)
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <label>Review</label>
        <input onChange={this.handleChange} value={this.state.text} />
        <input type="submit" />
      </form>
      <Reviews store={this.props.store} restaurantId={this.props.restaurantId} reviews={reviews} />
      </div>
    );
  }
};

export default ReviewInput;
