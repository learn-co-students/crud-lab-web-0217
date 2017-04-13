import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid'

class ReviewInput extends Component {

  constructor() {
    super()
    this.state = {
      text: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput({target: {value}}) {
    this.setState({
      text: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      payload: {
        text:this.state.text,
        restaurantId: this.props.restaurantId,
        id: cuid()
      }
    })
    this.setState({
      text: ''
    })
    // event.target.children[0].value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} type="text"/>
          <button type="submit">Submit Review</button>
        </form>
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store}/>
      </div>
    );
  }
};

export default ReviewInput;
