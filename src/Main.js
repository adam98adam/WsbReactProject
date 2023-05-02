import React, { useEffect, useState } from 'react'
import router from './components/router/Router';
import { BrowserRouter, RouterProvider, Routes, Route, Link } from "react-router-dom";
import './assets/chat/Chat.css'
import Chat from './components/chat/Chat';
import App from './App';
import Page from './components/page/Page';

function Main(props) {
    return (
        <div>
            <RouterProvider router={router}/>
            <Chat/>
        </div>
    )
            
}

export default Main;