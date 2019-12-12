import React, { Component } from 'react';

import logo from '../assets/logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return(
        <div className="nav">
          <img className="logo" src={logo} alt="logo"/>
          <p className="profile" ><b>Meu Perfil</b></p>  
        </div>
    )
  }
}

export default Header;