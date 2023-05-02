import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function App(props) {
  const navigate = useNavigate()
  function redirectToLoginPage() {
    if ((sessionStorage.getItem('username') === null) && (sessionStorage.getItem('password') === null)) {
      console.log('hello')
      navigate('/login')
    }
  }

  useEffect(
      () => {
        redirectToLoginPage()
            }
  )

  const [fontSize, setFontSize] = useState(32)

  const [mode, setMode] = useState('dark')

  const [sidebarColor, setSidebarColor] = useState('white')

  const [sidebarBorderColor, setSidebarBorderColor] = useState('solid black')

  const [backgroundColor, setBackgroundColor] = useState('#f5f5f9')

  const [lettersColor, setLettersColor] = useState('black')

  const increaseFontSize = () => {
    setFontSize(fontSize + 1)
}

  const decreaseFontSize = () => {
    setFontSize(fontSize - 1)
  }

  const changeMode = () => {
    if (backgroundColor.localeCompare('#f5f5f9') === 0) {
          setMode('light')
          setSidebarColor('black')
          setSidebarBorderColor('solid white')
          setBackgroundColor('black')
          setLettersColor('white')
    } else {
          setMode('dark')
          setSidebarColor('white')
          setSidebarBorderColor('solid black')
          setBackgroundColor('#f5f5f9')
          setLettersColor('black')
    }
  }
  
  return (
      <div className="App">
        <Sidebar 
          fontSize={fontSize}
          sidebarColor={sidebarColor}
          sidebarBorderColor={sidebarBorderColor}
          lettersColor={lettersColor} 
        />
        <div style={{backgroundColor: backgroundColor, marginLeft: '20%', height: '100vh'}}>
          <Content 
            mode={mode}
            fontSize={fontSize}
            backgroundColor={sidebarColor}
            lettersColor={lettersColor}
            changeMode={changeMode}
            increaseFontSize={increaseFontSize} 
            decreaseFontSize={decreaseFontSize}
          />
        </div>
      </div>
  );
}

export default App;
