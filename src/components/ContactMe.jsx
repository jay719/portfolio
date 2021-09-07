import React from 'react'
import '../styling/contactme.scss'
import profilePic from '../assets/github-profile.jpg'
import resumePDF from '../assets/javaria-Brascom-resume-blue.pdf';
export default function Resume () {

    return (
        <div className="contact" id="contact">
            <h1>About Me</h1>
            <div className="about">
                
                <div className="resumeContainer">

                </div>
                <div className="textContainer">
                    <h2 className="text">Full stack web & mobile developer experienced in Ruby on Rails, JavaScript, React/React Native and Redux . .</h2>
                </div>
                <div className="imageContainer">
                    <img src={profilePic} alt="Javaria's beatiful face"/>
                    <a href={ resumePDF } target="_blank" rel="noreferrer">View Resume</a>
                </div>
            </div>

            <div className="contact">

            </div>
            
        </div>
    )
}