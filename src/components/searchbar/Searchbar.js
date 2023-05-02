import React from 'react'
import '../../assets/searchbar/Searchbar.css'
import '../../assets/content/RowLayer.css'
import person from'../../assets/images/person.png'

function Searchbar(props) {
    return <div className="navbar-nav-right d-flex align-items-center SearchbarContainer RowLayer" id="navbar-collapse" style={{backgroundColor: props.backgroundColor}}>
               <div className="navbar-nav" >
                    <div className="nav-item d-flex">
                        <div>
                            <i className='bi bi-search' style={{fontSize: props.fontSize, color: props.lettersColor}}/>
                        </div>
                        <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." style={{height: '100%', fontSize: props.fontSize, color: props.lettersColor, backgroundColor: props.backgroundColor}}/>
                    </div>
                </div>
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <li className="nav-item lh-1 me-3">
                        <span/>
                    </li>
                    <li className="nav-item">
                        <div>
                            <img src={person} style={{height: props.fontSize}} alt="" className="rounded-circle"/>
                        </div>
                    </li>
                </ul>
            </div>
}

export default Searchbar