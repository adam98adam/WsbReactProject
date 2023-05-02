import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../../assets/login/Login.css'

function SaveCredentials(username, password) {
    sessionStorage.setItem('username', username)
    sessionStorage.setItem('password', password)
}

function Login(props) {
    const navigate = useNavigate()

    const [username, setUserame] = useState('')

    const [password, setPassword] = useState('')

    const handleUsername = event => {
        setUserame(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    return <div className='Login'>
               <h1 style={{fontSize: 32}}>Username</h1>
               <input 
                   style={{width: '100%', fontSize: 15}}
                   onChange={handleUsername}
                   value={username}
                />
               <h1 style={{fontSize: 32}}>Password</h1>
               <input
                    type="password" 
                    style={{width: '100%', fontSize: 15}}
                    onChange={handlePassword}
                    value={password}
                    />
               <button
                   className="btn btn-primary" 
                   style={{width: '50%', marginTop: '5%', fontSize: 20}}
                   onClick={() => {
                            SaveCredentials(username, password)
                            navigate('/')
                            navigate(0)
                        }
                    }
                >
                    Login
                </button>
            </div>
}

export default Login