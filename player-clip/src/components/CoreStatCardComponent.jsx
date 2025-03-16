import React, { useState } from 'react'
import '../css/CardComponent.css'

export default function CoreStatCardComponent({ stat, value, derivedStats, onDelete }) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    function calcMod() {
        return Math.floor(value / 2) - 5
    }

    return (
        <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* <button className="delete-button" onClick={onDelete}>x</button> */}
            {(isHovered && derivedStats.length > 0) && (
                <div className="hover-content">
                    {derivedStats.map((stat, index) => (
                        <li key={index}>{stat}</li>
                    ))}
                </div>
            )}
            <h3>{stat}</h3>
            <h2>{calcMod()}</h2>
            <p>{value}</p>
        </div>

    )
}