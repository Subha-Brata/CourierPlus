import React,{useState} from 'react';
import './dash.css';
import { useRef } from 'react';


export default function Dash() {
    const [selectedNav, setSelectedNav] = useState('');

    const handleSelectNav = (navItem) => {
      setSelectedNav(navItem);
    };
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
  
    const navItems = ['User', 'Notification', 'Customer Care', 'May I Help You', 'Sign Out'];
  
    return (
      <div className='dashboard row'>
        <nav className="navigation col col-lg-3 col-md-4 col-sm-6">
            <h2 className='how'>Dashboard</h2>
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={selectedNav === item ? 'active' : ''}
                onClick={() => handleSelectNav(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="main-content col-lg-8 col-md-8 col-sm-12">
          <h2 className='how'>{selectedNav}</h2>
          {/* Place content specific to each nav item here */}
        </div>
      </div>
    );
  };

