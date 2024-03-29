import React, { Suspense, useRef, useEffect } from 'react';
import { init } from 'ityped';
import Header from './Header.jsx';
import Points from './Points.jsx';
import '../styling/home.scss';
import {Canvas} from 'react-three-fiber';
import userEvent from '@testing-library/user-event'

export default function Home() {
    const helloRef = useRef()
    const typingRef = useRef()
    const iRef = useRef()
    useEffect(() => {
        init(typingRef.current, {
            showCursor: false,
            // startDelay:1400,
            backSpeed: 60,
            // backDelay: 400,
            typeSpeed: 100,
            strings: ["Full Stack Developer", "Innovator", "Scholar", "G.O.A.T"],
        });
        init(helloRef.current, {
            showCursor: false,
            strings: ["<Welcome! My name is>"],
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

    function AnimationCanvas () {
        return (
          <Canvas
            colorManagement={false}
            camera={{position: [100, 10, 0], fav: 76}}
          > 
              <Points />
          </Canvas>
        );
      };
    return (
        <div className="home" id="home">
            <div className="animation">  
                <Suspense fallback={<div> Loading...</div>}> 
                    <AnimationCanvas />
                </Suspense>
            </div>
            <div className="text">
                 <div className="wrapper">
                    <h2 ref={helloRef} className="helloText"></h2>
                    <h1>JBrascom</h1>
                    <h2 ref={typingRef} className="typingText"></h2>
                    {/* <div className="floatText">
                        <h2>boosting <b> productivity</b> and making yo</h2><span><b>User</b> focused applications </span>
                    </div>  */}
                </div>
        </div>
        </div>
    
    )
}

