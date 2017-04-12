import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super()
    this.state={
      text: ""
    }
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e){
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: { text: this.state.text }
    })

    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input
            type="text"
            onChange={(e)=>this.handleChange(e)}
            value={this.state.text}
            />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
