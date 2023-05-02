import React from 'react'
import '../../assets/chat/Chat.css'

function ChatBox(props) {
    return <div className='ChatBox'>
                <div style={{width:'20%', height: '100%', backgroundColor: '#0dcaf0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <h1>ChatBox</h1>
                        </div>
                        <button
                        class="bi bi-x-square" 
                        style={{fontSize: 20}} 
                        onClick={props.changeView}
                    />
                    </div>
                    <div>
                      <input 
                          style={{width: '100%', fontSize: 20}}
                      />  
                    </div>
                </div>
            </div>

}

export default ChatBox