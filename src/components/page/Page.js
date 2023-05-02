import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../assets/page/Page.css'
import Chat from '../chat/Chat'
import { useNavigate } from "react-router-dom";

function Page(props) {
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

    return <div className='Page'>
               <h1 className='PageTitle'>{props.name}</h1>
               <li style={{listStyleType: 'none'}}>
                    <Link to='/' className="btn btn-primary PageHomeButton">
                        Home Page
                    </Link>
                </li>
           </div>
}

export default Page