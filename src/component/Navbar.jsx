import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 <NavLink exact className="navbar-brand" exact to="/">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       <NavLink exact className="nav-link" exact to="/">Home <span className="sr-only"> </span></NavLink>
      </li>
      <li className="nav-item active">
       
      </li>
       

      <li className="nav-item active">
       <NavLink exact className="nav-link" exact to="/business">Business <span className="sr-only"> </span></NavLink>
      </li>
      <li className="nav-item active">
       <NavLink exact className="nav-link" exact to="/entertainment">Entertainment <span className="sr-only"> </span></NavLink>
      </li>
      <li className="nav-item active">
       <NavLink exact className="nav-link" exact to="/general">General <span className="sr-only"> </span></NavLink>
      </li>
      <li className="nav-item active">
       <NavLink exact className="nav-link" exact to="/health">Health <span className="sr-only"> </span></NavLink>
      </li>
      <li className="nav-item active">
       <NavLink exact className="nav-link" exact to="/science">Science <span className="sr-only"> </span></NavLink>
      </li>
      <li className="nav-item active">
       <NavLink exact className="nav-link" exact to="/sport">Sport <span className="sr-only"> </span></NavLink>
      </li>

      <li className="nav-item active">
       <NavLink exact className="nav-link" exact to="/technology">Technology <span className="sr-only"> </span></NavLink>
      </li>
     
    </ul>
    
  </div>
</nav>


            </>
        )
    }
}
