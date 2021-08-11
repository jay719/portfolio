import React, { useState } from 'react'
import '../styling/home.scss'
export default function Home() {

    const titles = ["Full Stack Developer", "Inovator", "Scholar"]

    const typingText = () => {
        titles.map(title => {
            return <h2>{title}</h2>
        })
    }
    return (

        
        <div className="home" id="home">
            <div className="left">

            </div>
            <div className="right">
                <div className="name">
                    <h3>Javaria Brascom</h3>
                    <div className="typing-text">
                        {typingText()}
                    </div>
                </div>
            
            </div>
        </div>
    )
}

