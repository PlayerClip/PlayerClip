import ItemCardComponent from './ItemCardComponent.jsx'
import SpellCardComponent from './SpellCardComponent.jsx'
import CoreStatCardComponent from './CoreStatCardComponent.jsx'
import React, { useState } from 'react'
import '../css/TabHolder.css'
import SpellModifierComponent from './SpellModifierComponent.jsx'

function TabHolder() {
    const [activeTab, setActiveTab] = useState('core-stats')

    const [items, setItems] = useState([
        // { Title: 'Item 1',  Damage: '10', Description: 'description of item 1', },
    ])

    const [spells, setSpells] = useState([
        // { name: 'Spell 1', level: 1, effect: 'effect of spell 1' },
    ])

    const [coreStats, setCoreStats] = useState([
        { stat: 'STR', mod: 10, derivedStats: ["Athletics"] },
        { stat: 'DEX', mod: 10, derivedStats: ["Acrobatics", "Sleight of Hand", "Stealth"] },
        { stat: 'INT', mod: 10,  derivedStats: ["Arcana", "History", "Investigation", "Nature", "Religion"] },
        { stat: 'WIS', mod: 10, derivedStats: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"] },
        { stat: 'CHA', mod: 10, derivedStats: ["Deception", "Intimidation", "Performance", "Persuasion"] },
        { stat: 'CON', mod: 10, derivedStats: [] },
    ])

    const addItem = () => {
        const newItem = { Title: `Item ${items.length + 1}`, Damage: '', Description: '' }
        setItems([...items, newItem])
    }

    const deleteItem = (index) => {
        const newItems = items.filter((_, i) => i !== index)
        setItems(newItems)
    }

    const saveItem = (updatedItem, index) => {
        const newItems = [...items]
        newItems[index] = updatedItem
        setItems(newItems)
    }

    const addSpell = () => {
        const newSpell = { name: `Spell ${spells.length + 1}`, level: spells.length + 1, effect: `effect ${spells.length + 1}` }
        setSpells([...spells, newSpell])
    }

    const deleteSpell = (index) => {
        const newSpells = spells.filter((_, i) => i !== index)
        setSpells(newSpells)
    }

    const saveSpell = (updatedSpell, index) => {
        const newSpells = [...spells]
        newSpells[index] = updatedSpell
        setSpells(newSpells)
    }

    // const addCoreStat = () => {
    //     const newCoreStat = { stat: `Core Stat ${coreStats.length + 1}`, value: coreStats.length + 1, description: `description ${coreStats.length + 1}` }
    //     setCoreStats([...coreStats, newCoreStat])
    // }

    // const deleteCoreStat = (index) => {
    //     const newCoreStats = coreStats.filter((_, i) => i !== index)
    //     setCoreStats(newCoreStats)
    // }

    const saveCoreStat = (updatedCoreStat, index) => {
        const newCoreStats = [...coreStats]
        newCoreStats[index].mod = updatedCoreStat
        setCoreStats(newCoreStats)
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'core-stats':
                return (
                    <div className="items-container">
                        {coreStats.map((coreStat, index) => (
                            <CoreStatCardComponent 
                                key={index}
                                stat={coreStat.stat} 
                                mod={coreStat.mod} 
                                derivedStats={coreStat.derivedStats}
                                // onDelete={() => deleteCoreStat(index)}
                                onSave={(updatedCoreStat) => saveCoreStat(updatedCoreStat, index)}
                            />
                        ))}
                        {/* <div className="plus-tile" onClick={addCoreStat}>
                            +
                        </div> */}
                    </div>
                )
            case 'spells':
                return (
                    <div className="items-container">
                        <SpellModifierComponent ability='1' dc='1' atkbonus='1'/>
                        {spells.map((spell, index) => (
                            <SpellCardComponent key={index}
                                name={spell.name} level={spell.level} effect={spell.effect}
                                onDelete={() => deleteSpell(index)}
                                onSave={(updatedSpell) => saveSpell(updatedSpell, index)}
                            />
                        ))}
                        <div className="plus-tile" onClick={addSpell}>
                            +
                        </div>
                    </div>
                )
            case 'items':
                return (
                    <div className="items-container">
                        {items.map((item, index) => (
                            <ItemCardComponent key={index} 
                            Title={item.Title} Description={item.Description} Damage={item.Damage} 
                            onDelete={() => deleteItem(index)} 
                            onSave={(updatedItem) => saveItem(updatedItem, index)}                          
                            />
                        ))}
                        <div className="plus-tile" onClick={addItem}>
                            +
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="tabs">
            <div className="navbar">
                <button
                    className={activeTab === 'core-stats' ? 'active' : ''}
                    onClick={() => setActiveTab('core-stats')}
                >
                    Stats
                </button>
                <button
                    className={activeTab === 'items' ? 'active' : ''}
                    onClick={() => setActiveTab('items')}
                >
                    Items
                </button>
                <button
                    className={activeTab === 'spells' ? 'active' : ''}
                    onClick={() => setActiveTab('spells')}
                >
                    Spells
                </button>
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    )
}

export default TabHolder
