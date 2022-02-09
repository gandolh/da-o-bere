import React from 'react';
import { Link ,NavLink} from "react-router-dom";


const Navbar = () => {

  return ( 
<nav className="navbar navbar-expand-sm navbar navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand">Navbar</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink activeClassName="active" to="/" className="nav-link " aria-current="page" >Acasa</NavLink>
        <NavLink activeClassName="active" to="/daobere" className="nav-link" >Da o bere</NavLink>
        <NavLink activeClassName="active" to="/leaderboard" className="nav-link" >Clasament</NavLink>
      </div>
    </div>
  </div>
</nav>
     );
}
 
export default Navbar;