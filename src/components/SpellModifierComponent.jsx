import React from 'react'
import '../css/CardComponent.css'

function SpellModifierComponent({ ability, dc, atkbonus }) {
    return (
        <div className="card">
            <h2>Spellcasting Ability: {ability}</h2>
            <h2>Spell Save DC: {dc}</h2>
            <h2>Spell Attack Bonus: {atkbonus}</h2>
        </div>
    )
}

export default SpellModifierComponent
