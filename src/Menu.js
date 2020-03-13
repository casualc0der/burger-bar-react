import React, {Component} from 'react'
import burger2 from './burger2.jpg'
import Starters from './Starters'
import Mains from './Mains'
import Dessert from './Dessert'
import Drinks from './Drinks'



class Menu extends Component{
  #Constructors_binding
constructor(props) {
  super(props);
  this.state ={
    starterDisplay: false,
    mainsDisplay: false,
    dessertDisplay: false,
    drinksDisplay: false,
  }

  this.startersClick = this.startersClick.bind(this)
  this.mainsClick = this.mainsClick.bind(this)
  this.dessertClick = this.dessertClick.bind(this)
  this.drinksClick = this.drinksClick.bind(this)
  this.switchDisplayFlag = this.switchDisplayFlag.bind(this)
  
}

switchDisplayFlag() {
  this.setState({
    starterDisplay: false,
    mainsDisplay: false,
    dessertDisplay: false,
    drinksDisplay: false,
    basket: [],
  })
}
//#endregion
//#region DISPLAY CLICKS
startersClick(){
  this.switchDisplayFlag()
  this.setState({
    starterDisplay: true,
  })
}

mainsClick(){
  this.switchDisplayFlag()
  this.setState({
    
    mainsDisplay: true,
  })
}

dessertClick() {
  this.switchDisplayFlag() 
  this.setState({

    dessertDisplay: true
  })
}

drinksClick() {
  this.switchDisplayFlag()
  this.setState({

    drinksDisplay: true
  })
}
//#endregion
  

render(){
    
    if(this.props.display === false){
      return null;
    }
    else{
      return (
        <div id="menu-main">
        <h1>Menu</h1>

        <div id="menu-head-pic">
        <img id ='menu-burgers' alt="3 hamburgers from eddies menu" src={ burger2 } />
        </div>

        <nav id="burg-menu-nav">
        <ul className="menu-nav-options">
        <li className="menu-nav-list" onClick={ this.startersClick }>Starters</li>
        <li className="menu-nav-list" onClick ={ this.mainsClick }>Mains</li>
        <li className="menu-nav-list" onClick = { this.dessertClick }>Dessert</li>
        <li className="menu-nav-list" onClick = { this.drinksClick }>Drinks</li>



        </ul>
        </nav>

        <div id="menu-display">
          <Starters display ={this.state.starterDisplay } getItem ={this.receiveDataFromMenuItem } />
          <Mains display = { this.state.mainsDisplay} />
          <Dessert display = { this.state.dessertDisplay} />
          <Drinks display = { this.state.drinksDisplay}  />

        </div>
</div>
      )
    }
  }
}

export default Menu