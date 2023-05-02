import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../../App';
import Page from '../../components/page/Page'
import { sidebarTopElements } from '../sidebar/SidebarTop';
import { pages, components, forms_tables } from '../sidebar/SidebarSection';
import changeElmentNameToUrlPath from './PathTool';
import Login from '../login/Login';


const router = createBrowserRouter(getRouterElements())

function getRouterElements() {
    const routerElements =  sidebarTopElements.reduce(
        (accumulator, currentValue) => { 
            accumulator.push(
                {
                    path: changeElmentNameToUrlPath(currentValue.name),
                    element: <Page name={currentValue.name}/>
                }
            )
            return accumulator
        },[])

    const mergeRouterElements = pages.concat(components).concat(forms_tables)    
    
    mergeRouterElements.forEach(
        element => routerElements.push(
            {
                path: changeElmentNameToUrlPath(element.name),
                element: <Page name={element.name}/>
            }
        )
    )
    
    routerElements.push(
        {
            path: '/login',
            element: <Login/>
        }
    );
        
    routerElements.push(
        {
            path: '/',
            element: <App/>
        }
    );

    return routerElements;
}

export default router