import React, { useState, useRef, useEffect } from 'react'
import { init } from 'ityped'
import Header from './Header.jsx'
import '../styling/home.scss'
import userEvent from '@testing-library/user-event'
export default function Home() {
    const helloRef = useRef()
    const typingRef = useRef()
    // const iRef = useRef()
    useEffect(() => {
        init(typingRef.current, {
            showCursor: false,
            // startDelay:1400,
            backSpeed: 100,
            // backDelay: 400,
            strings: ["Full Stack Developer", "Innovator", "Scholar", "G.O.A.T"],
        });
        init(helloRef.current, {
            showCursor: false,
            strings: ["Welcome! I am a"],
            loop: false,
            typeSpeed: 60,
            
        });
        // init(iRef.current, {
        //     showCursor: false,
        //     startDelay:1100,
        //     backSpeed: 100,
        //     strings: ["I am a"],
        //     loop: false,
        //     typeSpeed: 30,
        // });
    }, [])

    
    return (

        
        <div className="home" id="home">
            <Header />
            <div className="text">
                <div className="wrapper">
                    {/* <h2 ref={helloRef} className="helloText"></h2> */}
                    <h2 className="helloText">Welcome! I am a</h2>
                    <h2 ref={typingRef} className="typingText"></h2>
                    <div className="floatText">
                        <h2>boosting <b> productivity</b> and making yo</h2><span><b>User</b> focused applications </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

