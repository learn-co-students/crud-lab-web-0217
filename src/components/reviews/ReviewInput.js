import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid'

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput({target: {value}}){
    this.setState({
      text: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      payload: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
        id: cuid()
      }
    })
  }

  render() {
    let reviews = this.props.reviews
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} type="text" />
        </form>
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store}/>
      </div>
    );
  }
};

export default ReviewInput;
