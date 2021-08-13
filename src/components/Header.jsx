import React, { useCallback } from 'react'
import '../styling/header.scss'
import {LinkedIn, Mail, GitHub, LibraryBooks} from "@material-ui/icons"
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';

export default function Header () {
    const history = useHistory();

    const navigate = (text) => {
        console.log(text)
        history.push(text);
    }
    return (
        <div className="header" >
            <div className="headerWrapper">
                <div className="headerLeft">
                    <a href="#home" >
                        <img className="logo" src="./assets/logo.png" alt="GAME OVER" />
                    </a>
                    <div className="header-items">
                        <h4>Javaria Brascom</h4>
                    </div>
                    
                    
                </div>
            
                <div className="headerRight">
                <div className="header-items">
                        <IconButton color="inherit" aria-label="LinkedIn.com" onClick={() => window.open('https://www.Linkedin.com/in/javaria-brascom')}>
                            <LinkedIn className="icon" />
                        </IconButton>
                    </div>
                    <div className="header-items">
                        <IconButton color="inherit" aria-label="Github.com" onClick={() => window.open('https://github.com/jay719')}>
                            <GitHub className="icon"/>
                        </IconButton>
                    </div>
                    <div className="header-items">
                        <IconButton color="inherit" aria-label="Medium.com" onClick={() => window.open('https://javariab17.medium.com/')}>
                            <LibraryBooks className="icon"/>
                        </IconButton>
                    </div>
                </div>
            </div>
                {/* <div className="Pages"> 
                    <div className="nav-btn" onClick={() => navigate('/')}> HOME </div>
                    <div className="nav-btn" onClick={() => navigate('/projects')}>Projects</div>
                    <div className="nav-btn" onClick={() => navigate('/resume')}>Resume</div>
                </div> */}
        </div>
    )
}


