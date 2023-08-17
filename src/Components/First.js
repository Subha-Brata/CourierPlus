import React from 'react'
import img from '../truck.png'
import'./first.css'
export default function First() {
  return (
    <>
    <div className='row first'>
        <div className='col-lg-6 col-md-12 col-sm-12 col'>
            <h1 className='want'>Want to Send</h1>
            <h1 className='line'>Products Abroad ?</h1>
            <h3>One of The Best Solution in Market to Send Products Abroad to 90+ Countries</h3>
            <br></br>
            <div className='btn sign'>Get Started Now</div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
            <img className="truck" alt="truck"src={img}/>
        </div>
    </div>
    </>
  )
}
