import React from 'react'
import '../css/FixedCardComponent.css'

function FixedCardComponent({ name, level, hitpoints, actionClass, initiative, inspiration, money, onChange }) {
    return (
        <div className="fixed-card">
            <div className="header">
                <div className="field_h">
                    <label>Name:</label>
                    <input type="text" value={name} placeholder="Type name" onChange={(e) => onChange('name', e.target.value)} />
                </div>
                <div className="field_h">
                    <label>Level:</label>
                    <input type="number" value={level} placeholder="0" onChange={(e) => onChange('level', e.target.value)} />
                </div>
            </div>
            <div className="fields-container">
                <div className="field">
                    <label>Hitpoints:</label>
                    <input type="number" value={hitpoints} onChange={(e) => onChange('hitpoints', e.target.value)} />
                </div>
                <div className="field">
                    <label>AC:</label>
                    <input type="text" value={actionClass} onChange={(e) => onChange('actionClass', e.target.value)} />
                </div>
                <div className="field">
                    <label>Initiative:</label>
                    <input type="number" value={initiative} onChange={(e) => onChange('initiative', e.target.value)} />
                </div>
                <div className="field">
                    <label>Inspiration:</label>
                    <input type="text" value={inspiration} onChange={(e) => onChange('inspiration', e.target.value)} />
                </div>
                <div className="field">
                    <label>Money:</label>
                    <input type="number" value={money} onChange={(e) => onChange('money', e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default FixedCardComponent