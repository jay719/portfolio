import React, { useState, useEffect } from 'react'
import '../styling/projects.scss'
import PortfolioList from './PortfolioList.jsx'
import SelectedProject from './SelectedProject.jsx'
export default function ProjectsComponent () {
    const [selected, setSelected] = useState("goat")
    const [selectedProject, setProject] = useState([])

    const list = [
        {
            id: "snack",
            title: "Snack Maps",
            source: "https://www.youtube.com/embed/YSNof3v78aM",
            website: "https://snack-maps-7.web.app/",
            description: "Local Restaurant & Cuisine Finding Website",
        },

        {
            id:"goat",
            title:"G.O.A.T Planning",
            source: "https://www.youtube.com/embed/YSNof3v78aM",
            website: "",
            description: "Event Planning App compatible with multiple friends",
        },

        {
            id:"anime",
            title:"Animania",
            source: "https://www.youtube.com/embed/nVxz5scZzgA",
            website: "Review the Most nominated Anime with this app",
            description: "Top 50 anime reviewing app"
        }
    ];
    
    const listProjectTitles = (list) => {
        
        return list.map((item) => {
            
            return <PortfolioList 
                title={item.title}
                active={selected === item.id} 
                setSelected={setSelected}
                id={item.id}
                
            /> 
        })
    };
    useEffect(() => {
        switch(selected){
            case "goat":
                setProject(list[1]);
                break;
            case "snack":
                setProject(list[0]);
                break;
            case "anime":
            setProject(list[2]);
            break;
            default:
                setProject(list[1])
        }
        
    }, [selected])

    const showProjectInformation = (project) => {
        return <SelectedProject 
                title={project.title}
                source={project.source}
                website={project.website}
                description={project.description}
    
            />
    }
    return (
        
        <div className="projects" id="project">
            {console.log(list)}
            <h1> Portfolio</h1>
            <ul>
                {listProjectTitles(list)}
                
            </ul>
            <div className="container">
                {showProjectInformation(selectedProject)}
            </div>
            {/* <div className="individual-project">
                <h2>G.O.A.T Planning</h2>
                <a href="https://github.com/jay719/FlatironCapstone" >Github</a>
                <div className="demo-info">
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/YSNof3v78aM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="goat-project">
                        <p>For my last Flatiron School project, I created a React Native mobile app that easily plans trips with friends.</p>
                        <ul>
                            <li> Utilized JSON Web Tokens and PostgreSQL to store encrypted user information and hosted on Heroku</li>
                            <li>Combined React Native libraries to create functional map, camera, and calendar screens/tabs</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="individual-project">
                <h2>Snack Maps</h2>
                <a href="https://github.com/jay719/FlatironCapstone" >Github</a>
                <div className="demo-info">
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/nVxz5scZzgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="fart">
                        <ul>
                            <li>All are welcome to sign in and enjoy Snack Maps, your Local Restaurant finder!</li>
                            <li>“If you or any of your loved ones are hangry, this app is the perfect solution.” - Satisfied User</li>
                            <li>During the third mod of flatiron I was tasked with joining Javascript, HTML, and CSS to render api data based on user click-events. I also established Ruby On Rails backend to handle sign up and sign in authorization with JWT.</li>
                        </ul>
                    </div>
                </div>
            </div> */}

        </div>
    ) 
}