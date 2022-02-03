import React from 'react';
import { Link } from "react-router-dom";
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
        <Link to="/" className="nav-link active" aria-current="page" >Acasa</Link>
        <Link to="/daobere" className="nav-link" >Da o bere</Link>
        <Link to="/leaderboard" className="nav-link" >Clasament</Link>
      </div>
    </div>
  </div>
</nav>


     );
}
 
export default Navbar;