import React, { Component } from 'react'


class About extends Component {

  render(){
   
    if(this.props.display === false){
      return null;
    }
    else {
    return(

      <div><h1>Wassup</h1></div>
    )
    }
  }
}

export default About