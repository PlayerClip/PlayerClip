import ItemCardComponent from './ItemCardComponent.jsx'
import SpellCardComponent from './SpellCardComponent.jsx'
import CoreStatCardComponent from './CoreStatCardComponent.jsx'
import React, { useState } from 'react'
import '../css/TabHolder.css'

function TabHolder() {
    const [activeTab, setActiveTab] = useState('core-stats')

    const [items, setItems] = useState([
        { title: 'item 1', level: 'Level 1', description: 'description of item 1', damage: '10' },
    ])

    const [spells, setSpells] = useState([
        { name: 'spell 1', level: 1, effect: 'effect of spell 1' },
    ])

    const [coreStats, setCoreStats] = useState([
        { stat: 'STR', mod: 10, derivedStats: ["Athletics"] },
        { stat: 'DEX', mod: 11, derivedStats: ["Acrobatics", "Sleight of Hand", "Stealth"] },
        { stat: 'INT', mod: 9,  derivedStats: ["Arcana", "History", "Investigation", "Nature", "Religion"] },
        { stat: 'WIS', mod: 15, derivedStats: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"] },
        { stat: 'CHA', mod: 13, derivedStats: ["Deception", "Intimidation", "Performance", "Persuasion"] },
        { stat: 'CON', mod: 12, derivedStats: [] },
    ])

    const addItem = () => {
        const newItem = { title: `Item ${items.length + 1}`, level: `Level  ${items.length + 1}`, description: '', damage: '' }
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
                                title={item.title} level={item.level} description={item.description} damage={item.damage}
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