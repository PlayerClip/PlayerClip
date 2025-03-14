import React from 'react'
import '../css/CardComponent.css'

function ItemCardComponent({ title, content, onDelete }) {
    return (
        <div className="card">
            <button className="delete-button" onClick={onDelete}>x</button>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default ItemCardComponent