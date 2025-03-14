import React from 'react'
import '../css/CardComponent.css'

function CoreStatCardComponent({ stat, value, description, onDelete }) {
    return (
        <div className="card">
            <button className="delete-button" onClick={onDelete}>x</button>
            <h3>{stat}</h3>
            <p>Value: {value}</p>
            <p>{description}</p>
        </div>
    )
}

export default CoreStatCardComponent