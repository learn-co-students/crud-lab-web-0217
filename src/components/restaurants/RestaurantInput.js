import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text
      }
    })

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
      </form>
    );
  }
};

export default RestaurantInput;
