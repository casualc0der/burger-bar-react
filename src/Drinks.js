import React, { Component } from 'react'


class Drinks extends Component {

  render () {
    if(this.props.display === false) {
      return null;
    }
    else {
      return (
        <h1>Drinks</h1>
      )
    }
  }
}

export default Drinks