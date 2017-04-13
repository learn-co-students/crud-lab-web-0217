import React, { Component } from 'react';
import cuid from 'cuid'

class RestaurantInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput({target: {value}}) {
    this.setState({
      text: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      payload: {
        text: this.state.text,
        id: cuid()
      }
    })
    this.setState({
      text: ''
    })
    debugger
    // event.target.children[0].value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} type="text"/>
          <button type="submit">Create Restaurant</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
