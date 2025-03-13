import CardComponent from './CardComponent.jsx'
import React, { useState } from 'react'
import '../css/TabHolder.css'

function TabHolder() {
    const [activeTab, setActiveTab] = useState('items')

    const [items, setItems] = useState([
        { title: 'item 1', content: 'info on item 1' },
        { title: 'Item 2', content: 'info on item 2' },
        { title: 'Item 3', content: 'info on item 3' }
    ])

    const addItem = () => {
        const newItem = { title: `Item ${items.length + 1}`, content: `info item ${items.length + 1}` }
        setItems([...items, newItem])
    }

    const deleteItem = (index) => {
        const newItems = items.filter((_, i) => i !== index)
        setItems(newItems)
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'core-stats':
                return (<CardComponent title="Core Stats" content="Core stats details here" />)
            case 'spells':
                return <CardComponent title="Spells" content="List of spells here" />
            case 'items':
                return (
                    <div className="items-container">
                        {items.map((item, index) => (
                            <CardComponent key={index} 
                            title={item.title} content={item.content} 
                            onDelete={() => deleteItem(index)}                           
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
                    Core Stats
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