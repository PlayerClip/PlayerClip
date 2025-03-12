import React from 'react';
import Draggable from 'react-draggable';
import './css/App.css'
import CardComponent from './components/CardComponent';
import TabHolder from './components/TabHolder';
import MainComponent from './components/MainComponent';
function App() {
  
  return (
    <>
    <h1 className='project_name'> Welcome to Player Clip!</h1>
      <div className='mainComponent'>
      {/* <div className= 'constantView'>
        <CardComponent title="Plormby Gillman" content="Some content here" />
      </div>
      <div className= 'tabs'>
        <TabHolder />
      </div> */}
      <MainComponent />
    </div>
    </>
  )
}

export default App
