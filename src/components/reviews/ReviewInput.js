import React, { Component } from 'react';
import Reviews from './Reviews';
import Review from './Review';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text: ''
    })
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input type="text" onChange={(e) => this.handleOnChange(e)}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
