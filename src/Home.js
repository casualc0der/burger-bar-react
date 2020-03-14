import React, { Component } from 'react'
import burger1 from './burger1.jpg'
import burgerlogo from './burgerlogo copy.png'



class Home extends Component {

  render() {
    if(this.props.display === false) {
      return null;
    }
    else {

      return(
        <div id="home-main-container">
        <div id="home-main" 
        style={{  
        backgroundImage: `url(${burger1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
}}>     </div>
<div id="logo-div">
  <img id="logo" alt="burger logo " src= { burgerlogo }></img>
</div>
<div id="sale-banner"></div>

</div>
        
        
      )
    }
}
}

export default Home;