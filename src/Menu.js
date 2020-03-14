import React, {Component} from 'react'
import burger2 from './burger2.jpg'
import Starters from './Starters'




class Menu extends Component{
  #Constructors_binding
constructor(props) {
  super(props);
  this.state ={
    starterDisplay: {disp: false, name : 'starters'},
    mainsDisplay: {disp: false, name : 'mains'},
    dessertDisplay: {disp: false, name : 'dessert'},
    drinksDisplay: {disp: false, name : 'drinks'},
  }

  this.startersClick = this.startersClick.bind(this)
  this.mainsClick = this.mainsClick.bind(this)
  this.dessertClick = this.dessertClick.bind(this)
  this.drinksClick = this.drinksClick.bind(this)
  this.switchDisplayFlag = this.switchDisplayFlag.bind(this)
  
}

switchDisplayFlag() {
  this.setState({
    starterDisplay: {disp: false, name : 'starters'},
    mainsDisplay: {disp: false, name : 'mains'},
    dessertDisplay: {disp: false, name : 'dessert'},
    drinksDisplay: {disp: false, name : 'drinks'},
    basket: [],
  })
}
//#endregion
//#region DISPLAY CLICKS
startersClick(){
  this.switchDisplayFlag()
  this.setState({
    starterDisplay: {disp: true, name: 'starters'},
  })
}

mainsClick(){
  this.switchDisplayFlag()
  this.setState({
    
    mainsDisplay: {disp: true, name: 'mains'},
  })
}

dessertClick() {
  this.switchDisplayFlag() 
  this.setState({

    dessertDisplay: {disp: true, name: 'dessert'},
  })
}

drinksClick() {
  this.switchDisplayFlag()
  this.setState({

    drinksDisplay: {disp: true, name: 'drinks'},
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
        <div id="menu-head-pic">
        <h1 id=" menu-title">Menu</h1>
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
          <Starters display = {this.state.starterDisplay } />
          <Starters display = { this.state.mainsDisplay} />
          <Starters display = { this.state.dessertDisplay} />
          <Starters display = { this.state.drinksDisplay}  />

        </div>
</div>
      )
    }
  }
}

export default Menu