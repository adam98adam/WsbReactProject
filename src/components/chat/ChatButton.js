import React from 'react'
import '../../assets/chat/Chat.css'

function ChatButton(props) {
    return <div className='ChatButton'>
                <button className='btn btn-info' style={{width:'20%', fontSize: 32, height: '100%'}} onClick={props.changeView}>
                    LiveChat
                </button> 
            </div>
}

export default ChatButton