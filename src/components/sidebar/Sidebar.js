import React from 'react'
import '../../assets/sidebar/Sidebar.css'
import SidebarTop from './SidebarTop'
import SidebarSection from './SidebarSection'

function Sidebar(props) {
    return <div className='Sidebar' style={{backgroundColor: props.sidebarColor, color: props.lettersColor}}>
            <SidebarTop name="Sidebar" fontSize={props.fontSize} sidebarBorderColor={props.sidebarBorderColor} lettersColor={props.lettersColor}/>
            <SidebarSection name="pages" fontSize={props.fontSize} lettersColor={props.lettersColor}/>
            <SidebarSection name="components" fontSize={props.fontSize} lettersColor={props.lettersColor}/>
            <SidebarSection name="forms & tables" fontSize={props.fontSize} lettersColor={props.lettersColor}/>
        </div>
}

export default Sidebar