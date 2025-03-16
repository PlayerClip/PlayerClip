import React, { useState } from 'react'
import ModalComponent from './ModalComponent.jsx'
import '../css/CardComponent.css'

function ItemCardComponent({ Title, Description, Damage, onDelete, onSave }) {
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
            <h3>{Title}</h3>
            <h4>Damage: {Damage}</h4>
            {isHovered && (
                <div className="hover-content">
                    <p>Damage: {Damage}</p>
                    <p>Description: {Description}</p>
                </div>
            )}
            <ModalComponent
                isOpen={isModalOpen}
                onRequestClose={handleClose}
                card={{ Title, Damage, Description }}
                onSave={handleSave}
            />
        </div>
    )
}

export default ItemCardComponent