import React from 'react';
import './Sidebar.css'
import Peters from '../images/peters.png'
import Datain from '../images/Datain.png'
import material from '../images/Material.png'
import vector from '../images/Vector.png'
import vector1 from '../images/Vector1.png'


function Sidebar() {
    return (
        <div className='side-bar'>
            <div>
        <img src={Peters}/>
            </div>
            <div className='data'>
              <img src={Datain}/>
            </div>
            <div className='setting'>
            <div>
                <img src={material}/>
                
            </div>
            <div className='text'>
                Energy
            </div>
            <div>
                <img src={vector}/>
            </div>
            </div>
            <div className='water'>
                <div>
                    <img src={vector1}/>
                </div>
                <div className='text'>
            Water and Effluents
                </div>
                <div>
                    <img src={vector}/>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Sidebar;