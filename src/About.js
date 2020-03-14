import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
const jello = [
  {key: uuidv4(), text: 'Founded in 2020' },
  {key: uuidv4(), text: 'We are the best burger company in the world' },
  {key: uuidv4(), text: '...Probably'},
  {key: uuidv4() },
  {key: uuidv4() },
  {key: uuidv4() },
  {key: uuidv4() },
  {key: uuidv4() },
  {key: uuidv4() },
  {key: uuidv4() },
  {key: uuidv4() },
  {key: uuidv4() },
  {key: uuidv4() },
]



class About extends Component {

  render(){
   
    if(this.props.display === false){
      return null;
    }
    else {
    return(

      <div id="about-main">
      <h1>About Us.</h1>
      { jello.map((e) => <div className='about-text' key={e.key}> {e.text} </div>) }
      </div>
    )
    }
  }
}

export default About