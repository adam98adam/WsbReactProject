import React from 'react'
import '../../assets/content/ChangeFontSize.css'

function ChangeFontSize(props) {
    return <div className='ChangeFontSize'>
               <button onClick={props.increaseFontSize} className='btn btn-success' style={{width:'100%', fontSize: props.fontSize, color: props.lettersColor}}>
                    + increase fontSize
                </button> 
                <button onClick={props.decreaseFontSize} className='btn btn-secondary' style={{width:'100%', fontSize: props.fontSize, color: props.lettersColor}}>
                    - decrease fontSize
                </button>
            </div>
    
}

export default ChangeFontSize