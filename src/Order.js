import React, { Component } from 'react'


class Order extends Component{

  render() {

    if(this.props.display ===false) {
      return null;
    }
    else {

      return (
        <div>
        <h1>Coming Soon</h1>
        </div>
      )
    }
  }
}

export default Order;