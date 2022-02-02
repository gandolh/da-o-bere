import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
<nav class="navbar navbar-expand-sm navbar navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" Link>Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
        <Link to="/daobere" class="nav-link" >Features</Link>
        <Link to="/leaderboard" class="nav-link" >Pricing</Link>
      </div>
    </div>
  </div>
</nav>


     );
}
 
export default Navbar;