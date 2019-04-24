import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { userLogout, isLoggedIn, userInfo } from '../helpers/authentication';
class Header extends Component {
  logout = (e) => {
    userLogout();
    window.location.href = "/";
  }

  render(){
    const full_name = isLoggedIn() ? userInfo().full_name : null;
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={'/about'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={'/users/'}>Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={'/register'}>Register</NavLink>
        </li>
      </ul>
      {isLoggedIn() ? 
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link">{ full_name }</a>
        </li>
        <li className="nav-item">
          <button onClick={this.logout} className="btn btn-warning">Logout</button>
        </li>
      </ul>  : null }
    </nav>
  }
}

export default Header;