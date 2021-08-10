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
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">GOAT</a>
                    <div className="header-items">
                        <Mail classname="icon"/>
                        <span>javariab17@gmail.com</span>
                    </div>
                    <div className="header-items">
                        <IconButton color="inherit" aria-label="Linkedin.com" onClick={() => window.open('https://www.Linkedin.com/in/javaria-brascom')}>
                            <LinkedIn classname="icon" />
                        </IconButton>
                    </div>
                    <div className="header-items">
                        <IconButton color="inherit" aria-label="Linkedin.com" onClick={() => window.open('https://github.com/jay719')}>
                            <GitHub classname="icon"/>
                        </IconButton>
                    </div>
                    <div className="header-items">
                        <IconButton color="inherit" aria-label="Medium.com" onClick={() => window.open('https://javariab17.medium.com/')}>
                            <LibraryBooks classname="icon"/>
                        </IconButton>
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


