import React, { Component } from 'react';
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor (){
    super()
    this.state = {
      text: ""
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
    this.setState ({
      text: ""
    })

  }
  handleChange (event) {
    this.setState ({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <p>
            <label>Add Review</label>
            <input type="text" onChange={(event)=>this.handleChange(event)} />
            <input type="submit" />
          </p>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
