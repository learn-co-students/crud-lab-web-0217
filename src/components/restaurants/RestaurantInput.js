import React, { Component } from 'react';

class RestaurantInput extends Component {
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
      type: 'ADD_RESTAURANT',
      text: this.state.text
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          New Restaurant:
          <input onChange={event => this.handleInput(event)}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
