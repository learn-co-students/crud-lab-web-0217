import React, { Component } from 'react';
import Reviews from './Reviews';
import Review from './Review'

class ReviewInput extends Component {
	constructor(){
		super()

		this.state = {
			text: '',
		}
	}
	handleChange(event){
		this.setState({
			text: event.target.value
		})
	}

	handleOnSubmit(event){
		event.preventDefault()
		this.props.store.dispatch({
			type: "ADD_REVIEW",
			review: {
				text: this.state.text,
				restaurantId: this.props.restaurantId,
		}
		})
		this.setState({
			text: '',
		})
	}
  render() {
    return (
      <div>
      	<form onSubmit={(event) => this.handleOnSubmit(event)}>
      	<label>Add Review</label>
      	<input type="text" onChange={(event) => this.handleChange(event)} />
      	<input type="submit" />
      	</form>
      	<Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
