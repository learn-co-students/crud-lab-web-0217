import React, { Component } from 'react'

class RestaurantInput extends Component {
	constructor(){
		super()
		this.state = {
			text: ''
		}
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.store.dispatch({
			type: 'ADD_RESTAURANT',
			restaurant: {
				text: this.state.text,
				id: this.props.id
			}
		})

		this.setState({
			text: ''
		})

	}

	handleOnChange(event){
		// can also revert back tot he originally learned method of
		// putting "this.handleOnChange = this.handleOnChange.bind(this)" in the constructor
		// and set onChange={this.handleOnChange}
		this.setState({
			text: event.target.value
		})
	}

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        	<input type="text" onChange={(event) => this.handleOnChange(event)} />

        	<input type="submit" />
        </form>
      </div>
    )
  }
}

export default RestaurantInput
