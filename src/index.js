import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './Home.js'
import About from './About'
import Menu from './Menu'
import Order from './Order'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './menu.css'
import './about.css'
import './home.css'




class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      displayAbout: false,
      displayMenu : false,
      displayOrder: false,
      displayHome: true,
      myBasket: [],
    };
    this.menuClick = this.menuClick.bind(this);
    this.aboutClick = this.aboutClick.bind(this);
    this.orderClick = this.orderClick.bind(this);
    this.homeClick = this.homeClick.bind(this)
    this.clearDisplay = this.clearDisplay.bind(this)
  }

  clearDisplay(){
    this.setState({
      displayAbout: false,
      displayMenu : false,
      displayOrder: false,
      displayHome: false,
    })
  }

  homeClick() {
    this.clearDisplay()
    this.setState({


      displayHome:true,
    })
  }

  menuClick() {
    this.clearDisplay()
    this.setState({
     
      displayMenu: true,

    })
  }

  aboutClick() {
    this.clearDisplay()
    this.setState({
      
      displayAbout: true,
  

    })
  }

  orderClick() {
    this.clearDisplay()
    this.setState({
      displayOrder: true,
 

    })
  }
  render(){

    return (
      <div id="main">    
      <div id="header-info">  
      <nav id="nav-bar">
      <ul className='nav-options'>
     <li className="nav-list" id="home" onClick={this.homeClick}>Home</li>
      <li className="nav-list" id="menu" onClick={ this.menuClick  }>
      Menu</li>
      <li className="nav-list" onClick={ this.orderClick }>My Order {this.state.myBasket}</li>
      <li className="nav-list" id="about" onClick={this.aboutClick }>About us</li>
      </ul>
      </nav>
      <Home display = { this.state.displayHome } />
      <About display = {this.state.displayAbout}/>
      <Menu display = {this.state.displayMenu} />
      <Order display ={this.state.displayOrder} />
      

      
      </div>
</div>
      
       
      
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);