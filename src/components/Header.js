import React from 'react'
import { useHistory } from 'react-router';

export default function Header () {
    const history = useHistory();

    const navigate = (text) => {
        console.log(text)
      history.push(text);
    }
    return (
        <div className="Header">
            <div className="App-header">
                <div>
                    <p>Javaria Brascom</p>
                </div>
                <div className="Pages"> 
                    <div className="nav-btn"><h7 onClick={navigate('/')}>HOME</h7></div>
                    <div className="nav-btn"><h7 onClick={navigate('/portfolio')}>PORTFOLIO</h7></div>
                </div>
            </div>
        </div>
    )
}


