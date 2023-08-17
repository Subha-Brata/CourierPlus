import React from "react";
import '../Components/navbar.css';
import { Link } from 'react-router-dom';
import First from "../Components/First";
import About from "../Components/About";
import Choose from "../Components/Choose";
import PlanList from "../Components/PlanList";
import ReviewList from "../Components/Review";
import Contact from "../Components/Contact";
import Category from "../Components/Category";

export default function Home() {
  const scroll=(element)=>{
    const section = document.getElementById(element);
    if (section) {
      window.scrollTo({ behavior: 'smooth' });
      console.log(element)
    }
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid ">
        <Link className="navbar-brand">Courier <p className="brand">Plus</p></Link>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link onClick={()=>scroll('home')}className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"onClick={()=>scroll('about')} >About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"onClick={()=>scroll('pricing')}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={()=>scroll('contact')}>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
            <Link className="btn sign" to='/login'>Sign in</Link>
        </div>
      </div>
    </nav>
      <Category></Category>
      <First id='home'></First>
      
      <About id='about'></About>
      <Choose></Choose>
      <PlanList id='pricing' ></PlanList>
      <ReviewList></ReviewList>
      <Contact id='contact'></Contact>
    </>
  );
}
