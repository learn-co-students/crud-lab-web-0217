import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid';


class ReviewInput extends Component {
  constructor(props) {
  super(props)

  this.state = {
    text: '',
    }
  }

  handleOnChange(event) {
    this.setState({
      text:event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        restaurantId: this.props.restaurantId,
        text: this.state.text,
        id: cuid()
      }
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
          <label>Add Review</label>
          <input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit" />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
   }
  };

export default ReviewInput;
