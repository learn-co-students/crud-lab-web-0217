import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(ev){
    this.setState({text: ev.target.value})
  }

  handleSubmit(ev){
    ev.preventDefault()
    this.props.store.dispatch({type: "ADD_REVIEW", restaurantId: this.props.restaurantId, text: this.state.text})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={ (event) => {this.handleSubmit(event)} }>
          <input type='text' value={this.state.text} onChange={(event) => {this.handleChange(event)}}/>
          <button>Submit Review</button>
        </form>
        <Reviews
          store={this.props.store}
          restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
