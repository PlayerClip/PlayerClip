import React, { useState } from 'react'
import ModalComponent from './ModalComponent.jsx'
import '../css/CardComponent.css'

function ItemCardComponent({ title, level, description, damage, onDelete, onSave }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)
    const handleCardClick = () => setIsModalOpen(true)

    const handleSave = (updatedCard) => {
        onSave(updatedCard)
        setIsModalOpen(false)
    }

    const handleClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleCardClick}>
            <button className="delete-button" onClick={(e) => { e.stopPropagation(); onDelete(); }}>x</button>
            <h3>{title}</h3>
            <p>Level: {level}</p>
            {isHovered && (
                <div className="hover-content">
                    <p>Description: {description}</p>
                    <p>Damage: {damage}</p>
                </div>
            )}
            <ModalComponent
                isOpen={isModalOpen}
                onRequestClose={handleClose}
                card={{ title, level, description, damage }}
                onSave={handleSave}
            />
        </div>
    )
}

export default ItemCardComponent