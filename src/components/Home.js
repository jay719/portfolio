import React, { useState } from 'react'

export default function HomeComponent() {
    const [numCounter, setNumCounter] = useState(0)
    const handleClick = () => {
        setNumCounter(numCounter + 1)
    }  
    return (
        <div className="Home">
            <div>{numCounter}</div>
            <p>hi</p>
            <button onClick={handleClick}>count</button>
        </div>
    )
}

