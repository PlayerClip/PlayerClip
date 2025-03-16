import React from 'react'
import '../css/CardComponent.css'

function CardComponent({ title, content, onDelete }) {
    return (
        <div className="card">
            <button className="delete-button" onClick={onDelete}>delete</button>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default CardComponent