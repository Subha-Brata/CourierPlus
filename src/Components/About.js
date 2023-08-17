import React from 'react'
import './about.css'
import send from '../send.svg'
import dispatch from '../dispatch.svg'
import choose from '../choose.svg'
import { useState } from 'react'




export default function About() {
    const [c, setc] = useState(false);
    const [s, sets] = useState(false);
    const [d,setd]=useState(false);
    const click1=()=>{
        setc(!c);
    }
    const click2=()=> sets(!s);
    const click3=()=>setd(!d);
  return (<>
    <h1 className='how'>
            How It works
        </h1>
    <div className='about row'>
        < div className='cols col-lg-4 col-md-12 col-sm-12 ' >
            <h2>Select a Plan</h2>
            {!c?(<>
            <img className='img' src={choose} alt='choose'/>
            <button className='read btn'onClick={click1}>Learn More</button>
            </>
            ):
            (
                <p className='text'>Lorem Lotem</p>
            )}
        </div>
        
        <div className='cols col-lg-4 col-md-12 col-sm-12' >
            <h2>Send Product to us </h2>
            {!s?(<>
            <img className='img' src={send} alt='choose'/>
            <button className='read btn' onClick={click2}>Learn More</button>
            </>):
            (
                <p className='text'>Lorem Lotem</p>
            )}
        </div>
        
        <div className='cols col-lg-4 col-md-12 col-sm-12'   >
            <h2>Make Dispatch request</h2>
            {!d?(<>
            <img className='img' src={dispatch} alt='choose'/>
            <button className='read btn'onClick={click3}>Learn More</button>
            </>
            ):
            (
                <p className='text'>Lorem Lotem</p>
            )}
        </div>
    </div>
    </>
  )
}
