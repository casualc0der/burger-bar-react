import React, {Component} from 'react'
import menuList from './menu-list'
import styled from 'styled-components';
import Grid  from 'styled-components-grid';
import onionfickingrings from './images/onion_rings.jpg'
import chickwings from './images/chicken_wings.jpeg'
import garlicMushrooms from './images/garlic_mushrooms.jpg'
import nachos from './images/nachos.jpg'
import wedges from './images/wedges.jpg'
import chickstrips from './images/chickstrips.jpg'
import burger1 from './images/burger1.jpg'
import burger2 from './images/burger2.jpg'
import burger3 from './images/burger3.jpg'
import burger4 from './images/burger4.jpg'
import burger5 from './images/burger5.jpg'
import burger6 from './images/burger6.jpg'
import burger7 from './images/burger7.jpg'
import burger8 from './images/burger8.jpg'
import burger9 from './images/burger9.jpg'
import burger10 from './images/burger10.jpg'
import eton from './images/eton.jpg'
import choccake from './images/choccake.jpg'
import mudpie from './images/mudpie.jpg'
import trifle from './images/trifle.jpeg'
import bocker from './images/bocker.jpg'
import bud from './images/bud.jpg'
import coors from './images/coors.jpg'
import pepsi from './images/pepsi.jpeg'
import gin from './images/gin.jpg'
import vodka from './images/vodka.jpeg'


const images = {

  onionrings: onionfickingrings,
  chickenwings: chickwings,
  garlicmushrooms: garlicMushrooms,
  nachos: nachos,
  wedges: wedges,
  chickstrips: chickstrips,
  burger1: burger1,
  burger2: burger2,
  burger3: burger3,
  burger4: burger4,
  burger5: burger5,
  burger6: burger6,
  burger7: burger7,
  burger8: burger8,
  burger9: burger9,
  burger10: burger10,
  eton: eton,
  choccake: choccake,
  mudpie: mudpie,
  trifle: trifle,
  bocker: bocker,
  bud: bud,
  coors: coors,
  pepsi: pepsi,
  gin: gin,
  vodka: vodka

}


const StarterList = styled.div`

width:100%;


`
const StarterCard = styled.div`

padding: 20px;
margin: 5px;
border-style: solid;
border-color: black;
border-width: 2px;


`
const ImageCard = styled.img`

height: 200px;
width: 200px;
border-radius: 50%;


`

const StarterText = styled.div`
margin-top: 20px;
font-size:3em;

`

class Starters extends Component{

 
  render(){

    const nameTitle = this.props.display.name;
    const nameFormatted = nameTitle.charAt(0).toUpperCase() + nameTitle.slice(1)

    
    if(this.props.display.disp === false) {
      return null;
    }
    else {
      return ( 
        <div id="starters-main">
        <h1>{nameFormatted} </h1>
       <StarterList>

       <Grid size={10}>
        

        {menuList[this.props.display.name].map((e) => {
       
          return (
            <Grid.Unit key={e.key} size={{mobile: 1, tablet: 1 / 2, desktop: 1/ 2,}}> 
            <StarterCard >
         
            <ImageCard src={images[`${e.image}`]} alt={e.name}/>
          
            <StarterText>
            <h6>{e.name}</h6>
            <h6>{e.price}</h6>
            <button>Order</button>
            </StarterText>
            </StarterCard>
            </Grid.Unit>
          )

        })}
        </Grid>
        </StarterList>
        
        </div>
      )
    }
  }
}

export default Starters;