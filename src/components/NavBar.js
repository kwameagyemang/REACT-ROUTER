import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav id="Nav-Bar">
          <ul>
              <li>
              <Link to="/home">Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
          </ul>
        
        
        
      </nav>
    );
  }
}

export default NavBar;