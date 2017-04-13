import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput({target: {value}}){
    this.setState({
      text: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      payload: { name: this.state.text,
                 id: cuid()}})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput} />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
