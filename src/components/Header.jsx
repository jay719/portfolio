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
        <div className="header">
            <p>Full-stack Developer</p>
                <div>
                    
                </div>
                {/* <div className="Pages"> 
                    <div className="nav-btn" onClick={() => navigate('/')}> HOME </div>
                    <div className="nav-btn" onClick={() => navigate('/projects')}>Projects</div>
                    <div className="nav-btn" onClick={() => navigate('/resume')}>Resume</div>
                </div> */}
        </div>
    )
}


