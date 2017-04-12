import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleKeyDown(e){
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      restaurant: {
        text: this.state.text
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Input</label>
          <input onChange={(e) => {this.handleKeyDown(e)}} type="text"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
