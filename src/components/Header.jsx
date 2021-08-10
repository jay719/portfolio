import React, { useCallback } from 'react'
import '../styling/header.scss'
import {Person, Mail} from "@material-ui/icons"
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
                        <Person classname="icon" />
                        <span>+1 719-217-24772</span>
                    </div>
                    <div className="header-items">
                        <Mail classname="icon"/>
                        <span>javariab17@gmail.com</span>
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


