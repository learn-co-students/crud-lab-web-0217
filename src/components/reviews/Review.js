import React, { Component } from 'react';

class Review extends Component {

  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.handleDelete}>Delete this review</button>
      </li>
    );
  }
};

export default Review;
