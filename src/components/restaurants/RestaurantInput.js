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
    this.props.store.dispatch({type: "ADD_RESTAURANT", text: this.state.text})

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input onChange={this.handleKeyDown.bind(this)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
