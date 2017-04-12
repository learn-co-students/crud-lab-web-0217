import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state={
      text: ""
    }
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e){
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        restaurantId: this.props.restaurantId,
        text: this.state.text }
    })

    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => this.handleChange(e) }
            />
        </form>
        <Reviews
          restaurantId={this.props.restaurantId}
          store={this.props.store}
          />
      </div>
    );
  }
};

export default ReviewInput;
