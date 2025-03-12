import '../css/MainComponent.css'
import ConstantComponent from './ConstantComponent.jsx'
import TabHolder from './TabHolder.jsx'
import CardComponent from './CardComponent.jsx'
function MainComponent(){

    return (
        <div className='mainComponent'>
            <div className= 'constantView'>
                <ConstantComponent/>
            </div>
            <div className= 'tabs'>
                <TabHolder />
            </div>
        </div>
    )
}
export default MainComponent