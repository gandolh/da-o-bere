import React from 'react';
import KeyPoints from './KeyPoints';
import BannerHome from './BannerHome';
import { Link } from "react-router-dom";
import './Home.css';
const Home = () => {


    return ( <div className='BodyHome'>
    <BannerHome/>
    <KeyPoints/>
    <div  style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <div className='BannerGroupImg'></div>
        <p>Fi prietenos, nimeni nu mai e ok in ultimii ani.</p>
        <div className="HomeActionButton">
        <Link to="/daobere" className="btn DaOBere">Da o bere</Link>
        </div>
        <div style={{height:'100px',width:'0px'}}></div>
        <small>&copy;2021 P1GR1 & Caciau Enterprise</small>
        <a href="https://www.instagram.com/caciau_lovers" className="instagramButton" ><i class="fab fa-instagram"></i></a>
    </div>
    </div> );
}
 
export default Home;