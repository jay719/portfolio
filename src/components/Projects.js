import React from 'react'
import '../styling/Projects.css'
export default function ProjectsComponent () {

    return (
        <div className="Projects">
            <div className="individual-project">
                <h2>G.O.A.T Planning</h2>
                <a href="https://github.com/jay719/FlatironCapstone" >Github</a>
                <div className="demo-info">
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/YSNof3v78aM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="fart">
                        <ul>
                            <p>For my last Flatiron School project, I created a React Native mobile app that easily plans trips with your friends.</p>
                            <p>“If you or any of your loved ones are hangry, this app is the perfect solution.” - Satisfied User</p>
                            <li> joining Javascript, HTML, and CSS to render api data based on user click-events. I also established Ruby On Rails backend to handle sign up and sign in authorization with JWT.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="individual-project">
                <h2>Snap Maps</h2>
                <a href="https://github.com/jay719/FlatironCapstone" >Github</a>
                <div className="demo-info">
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/YSNof3v78aM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="fart">
                        <ul>
                            <li>All are welcome to sign in and enjoy Snack Maps, your Local Restaurant finder!</li>
                            <li>“If you or any of your loved ones are hangry, this app is the perfect solution.” - Satisfied User</li>
                            <li>During the third mod of flatiron I was tasked with joining Javascript, HTML, and CSS to render api data based on user click-events. I also established Ruby On Rails backend to handle sign up and sign in authorization with JWT.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    ) 
}