import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super()
    this.state = {text: ''}
  }

  handleSubmit(ev){
    ev.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      text: this.state.text
  })
    this.setState({text: ''})
  }

  handleChange(ev){
    this.setState({
      text: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ (event) => {this.handleSubmit(event)} }>
          <input type='text' value={this.state.text} onChange={(event) => {this.handleChange(event)}}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
