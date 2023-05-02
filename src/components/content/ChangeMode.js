import React from 'react'

function ChangeMode(props) {
    return <div className='ChangeMode'>
               <button onClick={props.changeMode} className='btn btn-danger' style={{width:'100%', fontSize: props.fontSize, color: props.lettersColor}}>
                    Change to {props.mode} mode
                </button> 
            </div>
    
}

export default ChangeMode