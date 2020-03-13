import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import burger1 from './burger1.jpg'
import burger2 from './burger2.jpg'
import burger3 from './burger3.jpg'
import './index.css'
import { Button } from 'react-bootstrap'


class Carouseller extends Component{

  
  
  render(){
    return (
<Carousel className="carr" interval={0}>
  <Carousel.Item className="skew">
    <img
      className="d-block w-100"
      src= {burger1}
      alt="First slide"
      id="burger1"
    />
     
    <div className="overlay"></div>
    <Carousel.Caption className="carr-text">
      
      
      <h3>Fast Eddie's Burgers</h3>
      <p>Simply the best burgers.</p>
    
      
    </Carousel.Caption>
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ burger2 }
      alt="Third slide"
      id="burger2"
    />
<div className="overlay"></div>
    <Carousel.Caption className="carr-text">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ burger3 }
      alt="Third slide"
      id="burger3"

    />
<div className="overlay"></div>
    <Carousel.Caption className="carr-text">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
  }
}

export default Carouseller;