import React, { useEffect } from 'react'
import Modal from 'react-modal'
import '../css/ModalComponent.css'

Modal.setAppElement('#root')

function ModalComponent({ isOpen, onRequestClose, card, onSave }) {
    const [formData, setFormData] = React.useState(card)

    useEffect(() => {
        setFormData(card)
    }, [card])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSave = () => {
        console.log("Saving and closing modal...");
        onSave(formData)
        onRequestClose()
    }

    return (
        <Modal 
            isOpen={isOpen} 
            shouldCloseOnOverlayClick={true} 
            onRequestClose={onRequestClose} 
            className="modal" 
            overlayClassName="overlay">
            <h2>Edit Item</h2>
            {Object.keys(formData).map((key) => (
                <div key={key} className="field">
                    <label>{key}:</label>
                    <input type="text" name={key} value={formData[key]} onChange={handleChange} />
                </div>
            ))}
            <button onClick={handleSave}>Save</button>
            <h3>Press Esc after done with edit</h3>
        </Modal>
    )
}

export default ModalComponent