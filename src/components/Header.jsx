import React, { useCallback } from 'react'
import '../styling/header.scss'
import { useHistory } from 'react-router';

export default function Header () {
    const history = useHistory();

    const navigate = (text) => {
        console.log(text)
        history.push(text);
    }
    return (
        <div className="header" >
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">GOAT</a>
                    <div className="header-text">
                        
                    </div>
                </div>
            </div>
                <div className="right">
                    
                </div>
            
                {/* <div className="Pages"> 
                    <div className="nav-btn" onClick={() => navigate('/')}> HOME </div>
                    <div className="nav-btn" onClick={() => navigate('/projects')}>Projects</div>
                    <div className="nav-btn" onClick={() => navigate('/resume')}>Resume</div>
                </div> */}
        </div>
    )
}


