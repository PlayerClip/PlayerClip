import React from 'react'
import '../css/CardComponent.css'

function SpellCardComponent({ name, level, effect, onDelete }) {
    return (
        <div className="card">
            <button className="delete-button" onClick={onDelete}>x</button>
            <h3>{name}</h3>
            <p>Level: {level}</p>
            <p>Effect: {effect}</p>
            
        </div>
    )
}

export default SpellCardComponent