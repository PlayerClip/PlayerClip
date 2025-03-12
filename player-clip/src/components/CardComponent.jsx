import React from 'react'
import '../css/CardComponent.css'

function CardComponent({ title, content, onDelete }) {
    return (
        <div className="card">
            <button className="delete-button" onClick={onDelete}>X</button>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default CardComponent