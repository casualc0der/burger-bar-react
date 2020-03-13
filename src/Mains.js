import React, { Component } from 'react'

class Mains extends Component {
  render() {
    if(this.props.display === false) {
      return null;
    }
    else {
      return (
        <h1>Mains</h1>
      )
    }
  }
}

export default Mains