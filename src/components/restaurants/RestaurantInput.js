import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange(event) {
    this.setState({text: event.target.value})
  }
  onSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      text: this.state.text
    })
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Restaurant</label>
          <input onChange={this.handleChange} value={this.state.text} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
