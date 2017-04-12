import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class RestaurantInput extends Component {
	constructor() {
		super()

		this.state = {
			text: '',
		}
	}
	handleOnChange(event){
		this.setState({
			text: event.target.value
		})
	}

	handleOnSubmit(event){
		event.preventDefault()
		this.props.store.dispatch({
			type: "ADD_RESTAURANT",
			restaurant: {
				text: this.state.text,
				id: this.props.id
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
       		<input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)} />
       		<input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
