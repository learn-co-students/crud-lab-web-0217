import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor (){
    super()
    this.state = {
      text: ""
    }
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch ({
      type: "ADD_RESTAURANT",
      restaurant: {
        text: this.state.text
      }
    })
    this.setState ({
      text: ""
    })

  }

  handleChange(event){
    this.setState ({
      text: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <p>
            <label>Add Restaurant</label>
            <input type="text" onChange={(event)=>this.handleChange(event)} />
            <input type="submit" />
          </p>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
