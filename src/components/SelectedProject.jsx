import React from 'react'

export default function SelectedProject({website,source,description}) {
    return (
        <div className="selectedProject">
            
            <div className="site">
            <iframe 
                className="iframe" 
                src={source} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

            </iframe>
            <h2>{website}</h2>
            </div>
            <ul>{description}</ul>
        </div>
    )
}
