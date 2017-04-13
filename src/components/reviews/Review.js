import React, { Component } from 'react';


class Review extends Component {
  constructor() {
    super()
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(event) {
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.review.id
    })
  }
  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={(event) => {this.handleOnClick(event)}}>delete</button>
      </li>
    );
  }
};


export default Review;
