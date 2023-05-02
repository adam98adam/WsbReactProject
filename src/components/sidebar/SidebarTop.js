import React from 'react'
import '../../assets/sidebar/SidebarTop.css'
import '../../assets/sidebar/SidebarElement.css'
import SidebarElement from './SidebarElement'

function SidebarTop(props) {
    return  <div>  
                <div className='SidebarTop' style={{borderBottom: props.sidebarBorderColor}}>
                    <h1 style={{fontSize: props.fontSize}}>{props.name}</h1>
                </div>
                {getSidebarTopElements(props.fontSize, props.lettersColor)}
            </div>
}

export const sidebarTopElements = [
        {
            name:  'Dashboard',
            icon : 'bi bi-house',
            button: true
        },
        {
            name: 'Layouts',
            icon: 'bi bi-layout-sidebar',
            button: true
        }
    ]

function getSidebarTopElements(fontSize, lettersColor) {
        return <div>
                {sidebarTopElements.map((element) => (
                  <SidebarElement key={element.name} name={element.name} icon={element.icon} button={element.button} fontSize={fontSize} lettersColor={lettersColor}/>  
                ))}
               </div>
}
            
export default SidebarTop;