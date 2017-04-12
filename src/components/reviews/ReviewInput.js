import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super()
    this.state = {text: ''}
  }
  handleInput(event) {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          New Review:
          <input onChange={(event) => this.handleInput(event)}/>
          <input type="submit" value="Submit" />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
