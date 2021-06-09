import React, { useCallback } from 'react'
import { useHistory } from 'react-router';

export default function Header () {
    const history = useHistory();

    const navigate = (text) => {
        console.log(text)
        history.push(text);
    }
    return (
        <div className="Header">
                <div>
                    <p>Javaria Brascom</p>
                </div>
                <div className="Pages"> 
                    <div className="nav-btn" onClick={() => navigate('/')}> HOME </div>
                    <div className="nav-btn" onClick={() => navigate('/projects')}>Projects</div>
                </div>
        </div>
    )
}


