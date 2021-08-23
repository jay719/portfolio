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
    // const iRef = useRef()
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

        </div>
    )
}

