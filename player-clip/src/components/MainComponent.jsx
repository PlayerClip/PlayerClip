import '../css/MainComponent.css'
import ConstantComponent from './ConstantComponent.jsx'
import TabHolder from './TabHolder.jsx'
import CardComponent from './CardComponent.jsx'
import Draggable from 'react-draggable'


function MainComponent(){

    return (
            <div className='mainComponent'>
                {/* removed this div specifivally because it got confusing to navigtate and style*/}
                <ConstantComponent/>
                <div className= 'tabs'>
                    <TabHolder />
                    </div>
            </div>
    )
}
export default MainComponent