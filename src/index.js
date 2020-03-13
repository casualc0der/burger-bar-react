import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import About from './About'
import Menu from './Menu'
import Order from './Order'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './menu.css'




class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      displayAbout: false,
      displayMenu : false,
      displayOrder: false,
      myBasket: [],
    };
    this.menuClick = this.menuClick.bind(this);
    this.aboutClick = this.aboutClick.bind(this);
    this.orderClick = this.orderClick.bind(this);
  }


  menuClick() {

    this.setState({
      displayMenu: true,
      displayAbout: false,
      displayOrder: false,

    })
  }

  aboutClick() {

    this.setState({
      
      displayAbout: true,
      displayMenu: false,
      displayOrder: false,

    })
  }

  orderClick() {

    this.setState({
      displayOrder: true,
      displayAbout: false,
      displayMenu: false,

    })
  }
  render(){

    return (
      <div id="main">    
      <div id="header-info">  
      <nav id="nav-bar">
      <ul className='nav-options'>
     
      <li className="nav-list" id="menu" onClick={ this.menuClick  }>
      Menu</li>
      <li className="nav-list" onClick={ this.orderClick }>My Order {this.state.myBasket}</li>
      <li className="nav-list" id="about" onClick={this.aboutClick }>About us</li>
      </ul>
      </nav>
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