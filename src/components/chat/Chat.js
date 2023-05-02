import React, { useEffect, useState } from 'react'
import ChatButton from './ChatButton'
import ChatBox from './ChatBox'
import '../../assets/chat/Chat.css'

function Chat(props) {
    const[visible, setVisible] = useState(true)

    function changeView() {
      setVisible(!visible)
    }

    if ((sessionStorage.getItem('username') !== null) && (sessionStorage.getItem('password') !== null)) { 
        console.log('test')
        if (visible) 
            return <ChatButton changeView={changeView}/>
        else 
            return <ChatBox changeView={changeView}/>
    }
    
}

export default Chat