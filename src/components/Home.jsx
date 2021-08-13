import React, { useState, useRef, useEffect } from 'react'
import { init } from 'ityped'
import Header from './Header.jsx'
import '../styling/home.scss'
import userEvent from '@testing-library/user-event'
export default function Home() {
    const helloRef = useRef()
    const typingRef = useRef()
    const iRef = useRef()
    useEffect(() => {
        init(typingRef.current, {
            showCursor: false,
            startDelay:2000,
            backSpeed: 100,
            strings: ["Full Stack Developer", "Innovator", "Scholar", "G.O.A.T"],
        });
        init(helloRef.current, {
            showCursor: false,
            strings: ["Welcome!"],
            loop: false,
            typeSpeed: 30,
            
        });
        init(iRef.current, {
            showCursor: false,
            startDelay:1100,
            backSpeed: 100,
            strings: ["I am a"],
            loop: false,
            typeSpeed: 30,
        });
    }, [])

    
    return (

        
        <div className="home" id="home">
            <Header />
            <div className="left">
                
            </div>
            <aside className="right">
                <div className="wrapper">
                    <div className="name">
                        <h2 ref={helloRef} className="helloText">

                        </h2>
                        <h2 ref={iRef} className="iText"></h2> <span ref={typingRef} className="typingText"></span>
                    <div className="floatText">
                        <h2>making YOUser centered designs and applications </h2>
                    </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

