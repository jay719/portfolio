import React, { useState } from 'react'

export default function Home() {
    const [numCounter, setNumCounter] = useState(0)
    const handleClick = () => {
        setNumCounter(numCounter + 1)
    }  
    return (
        <div className="Home">
            <div>{numCounter}</div>
            
            <button onClick={handleClick}>count</button>
        </div>
    )
}

