import React, { Component } from 'react'


class Dessert extends Component {

  render() {
    if(this.props.display === false) {
      return null;
    }
    else {
      return (
        <h1>Dessert</h1>
      )
    }
  }
}

export default Dessert