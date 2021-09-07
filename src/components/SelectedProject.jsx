import { ListItem } from '@material-ui/core';
import React from 'react'
// import '../styling/selectedProject.scss';

export default function SelectedProject({website,source,description, bulletPoints}) {
    let i = 1
    const spawnListItems = (listItems) => {
        if(listItems !== undefined){
            return listItems.map(item => {
                return <li key={i += 1}>{item}</li>
            })
        }
    }
    return (
        <div className="selectedProject">
             
            <div className="site">
            
                <div className="youtube">
                <h2>{description}</h2>
                    <iframe 
                        className="iframe" 
                        src={source} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

                    </iframe>
                    {website ? <a href={website}>Visit Website</a> : ""}
                </div>
            </div>
            <div className="list">
                
                <ul className="listItems">
                    {spawnListItems(bulletPoints)}
                </ul>
            </div>
            
        </div>
    )
}

