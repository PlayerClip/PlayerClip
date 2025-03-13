import React from 'react'
import '../css/FixedCardComponent.css'

function FixedCardComponent({ name, level, hitpoints, actionClass, initiative, inspiration, money, onChange }) {
    return (
        <div className="fixed-card">
            <div className="header">
                <h2>{name}</h2>
                <p>Level: {level}</p>
            </div>
            <div className="fields-container">
                <div className="field">
                    <label>Hitpoints:</label>
                    <input type="number" value={hitpoints} onChange={(e) => onChange('hitpoints', e.target.value)} />
                </div>
                <div className="field">
                    <label>Action Class:</label>
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