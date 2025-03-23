import React, { useState } from 'react'
import '../css/ConstantComponent.css'
import FixedCardComponent from './FixedCardComponent.jsx'

function ConstantComponent() {
    const [character, setCharacter] = useState({
        name: 'Character Name',
        level: 1,
        hitpoints: 10,
        actionClass: 12,
        initiative: 0,
        inspiration: '',
        money: 0
    })

    const handleChange = (field, value) => {
        setCharacter({
            ...character,
            [field]: value
        })
    }

    return (
        <div className="constantView">
            <FixedCardComponent
                name={character.name}
                level={character.level}
                hitpoints={character.hitpoints}
                actionClass={character.actionClass}
                initiative={character.initiative}
                inspiration={character.inspiration}
                money={character.money}
                onChange={handleChange}
            />
        </div>
    )
}

export default ConstantComponent