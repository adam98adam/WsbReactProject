import React from 'react'
import '../../assets/content/Content.css'
import Searchbar from '../searchbar/Searchbar'
import ContentMain from './ContentMain'
import ChangeFontSize from './ChangeFontSize'
import ChangeMode from './ChangeMode'

function Content(props) {
    return <div className='Content'>
                    <ChangeMode
                        changeMode={props.changeMode}
                        mode={props.mode}
                        fontSize={props.fontSize}
                        lettersColor={props.lettersColor}
                    />
                    <ChangeFontSize 
                        fontSize={props.fontSize}
                        lettersColor={props.lettersColor}
                        increaseFontSize={props.increaseFontSize} 
                        decreaseFontSize={props.decreaseFontSize}
                    />
                    <Searchbar
                        fontSize={props.fontSize}
                        lettersColor={props.lettersColor}
                        backgroundColor={props.backgroundColor}
                    />
           </div>
    
}

export default Content