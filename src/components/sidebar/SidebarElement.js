import React from 'react'
import PropTypes from 'prop-types';
import '../../assets/sidebar/SidebarElement.css'
import changeElmentNameToUrlPath from '../router/PathTool';
import { Link } from "react-router-dom";

function SidebarElement(props) {
    if (props.button) { 
        return <div className='SidebarElementWithSign'>
                    <h1 style={{fontSize: props.fontSize}}>
                        <span className={props.icon}> 
                        <Link to={changeElmentNameToUrlPath(props.name)} className='SidebarLink' style={{color: props.lettersColor}}>
                            {props.name}
                        </Link>
                        </span> 
                    </h1>
                    <h1 style={{fontSize: props.fontSize}} className='Sign'/>
                </div>
    } else {
        return <div className='SidebarElement'>
                    <h1 style={{fontSize: props.fontSize}}>
                        <span className={props.icon} />
                        <Link to={changeElmentNameToUrlPath(props.name)} className='SidebarLink' style={{color: props.lettersColor}}>
                                {props.name}
                        </Link>
                    </h1>
                </div>
    }
}

SidebarElement.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    button: PropTypes.bool
}

export default SidebarElement