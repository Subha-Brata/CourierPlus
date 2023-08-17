import React from "react";
import "./choose.css";
import src from "../city.jpg";
import { Link } from "react-router-dom";

export default function Choose() {
  return (
    <div className="row chose">
      <div className="col-lg-6 col-md-12 col-sm-12 cont">
        <img src={src} alt="city" className="city" />
        <div className="title">
          <h2>Why</h2>
          <h1 className="why">choose</h1>
          <h2>Us</h2>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 cont">
        <h3 className="h3">
            <h1 style={{
                color:'#1036df',
                fontSize:'60px',
                fontWeight:'400'
            }}>Heading</h1>Lorem ipsum dolor sit amet. Est voluptatem dolorem et sapiente voluptatem aut alias quis a inventore nisi non voluptate ipsa! Sit aspernatur temporibus sed rerum itaque qui dignissimos ipsa et quia dolores.
        <br></br>
        <h1>
        <Link className="btn sign" style={{
            margin:'10px',
        }}>Register</Link>
        <Link className="btn sign" to='/login'>Log in</Link>
        </h1>
        </h3>
        
      </div>
    </div>
  );
}
