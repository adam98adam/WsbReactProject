import React from 'react'
import '../../assets/sidebar/SidebarSection.css'
import SidebarElement from './SidebarElement'


function SidebarSection(props) {
    return  <div className='SidebarSection'> 
                <div>
                    <h1 style={{fontSize: props.fontSize, color: props.lettersColor}}>
                        {props.name.toUpperCase()}
                    </h1>
                </div> 
                {getSidebarSectionElements(props.name, props.fontSize, props.lettersColor)}
            </div>
}

export const pages = [
    {
        name:  'Account Settings',
        icon : 'bi bi-window',
        button: true
    },
    {
        name: 'Authentications',
        icon: 'bi bi-lock',
        button: true
    },
    {
        name: 'Misc',
        icon: 'bi bi-box',
        button: true
    }
]

export const components = [
        {
            name:  'Cards',
            icon : 'bi bi-card-list',
            button: false
        },
        {
            name: 'User interface',
            icon: 'bi bi-person',
            button: true
        },
        {
            name: 'Extended UI',
            icon: 'bi bi-union',
            button: true
        },
        {
            name: 'Boxicons',
            icon: 'bi bi-box',
            button: false
        }
]

export const forms_tables = [
    {
        name:  'Form Elements',
        icon : 'bi bi-window',
        button: true
    },
    {
        name: 'Form Layouts',
        icon: 'bi bi-lock',
        button: true
    },
    {
        name: 'Tables',
        icon: 'bi bi-table',
        button: false
    }
]

 const sidebarSectionElements = {
    pages: pages,
    components: components,
    'forms & tables': forms_tables
}

function getSidebarSectionElements(name, fontSize, lettersColor) {
    return <div>
            {sidebarSectionElements[name].map((element) => (
              <SidebarElement key={element.name} name={element.name} icon={element.icon} button={element.button} fontSize={fontSize} lettersColor={lettersColor}/>  
            ))}
           </div>
          

}

export default SidebarSection