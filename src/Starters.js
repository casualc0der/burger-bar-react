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

const images = {

  onionrings: onionfickingrings,
  chickenwings: chickwings,
  garlicmushrooms: garlicMushrooms,
  nachos: nachos,
  wedges: wedges,
  chickstrips: chickstrips,

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
    if(this.props.display === false) {
      return null;
    }
    else {
      return ( 
        <div id="starters-main">
        <h1>Starters </h1>
       <StarterList>

       <Grid size={10}>
        

        {menuList.starters.map((e) => {
       
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