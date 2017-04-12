import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.review.id
    })
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
};

export default Review;
