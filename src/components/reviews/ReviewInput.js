import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({type: "ADD_REVIEW", text: this.state.text, restaurantId: this.props.restaurantId})
  }

  handleChange(e){
    this.setState({text: e.target.value})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)}/>
          <input type="submit"/>
        </form>
        <ul>
          <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
        </ul>
      </div>
    );
  }
};

export default ReviewInput;
