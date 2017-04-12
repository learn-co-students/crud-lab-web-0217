import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {text: this.state.text}
    })
    this.setState({
      text: ''
    })
  }

  handleOnChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input type="text" value={this.state.text} onChange={(e) => this.handleOnChange(e)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
