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
            
            </div>
            <h2>{description}</h2>
            {website ? <a href={website}>Visit Website</a> : ""}
        </div>
    )
}

