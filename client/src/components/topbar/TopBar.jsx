import React from './topbar.css'
import axios from 'axios'
import { Link  } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/Context';
export default function TopBar() {
    const {user,dispatch}=useContext(Context);
    const handleLogout= async()=>{
        dispatch({type:"LOGOUT"})
    }
    const Pf= "http://localhost:5000/images/";
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest-p"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className='topListItem'>
                    <Link  className='link' to="/">HOME</Link >
                </li>
                <li className='topListItem'>
                    <Link className='link'  to="/about">ABOUT</Link >
                </li>
                <li className='topListItem'>
                    <Link className='link'  to="/contact">CONTACT</Link >
                </li>
                <li className='topListItem'>
                    <Link className='link' to="/write">WRITE</Link >
                </li>
            </ul>
        </div>
        <div className="topRight">
        {
            user? (
            <>
                <Link to='/settings'>
                    <img src={Pf+user.profilePic} alt="" className="topImg" />
                </Link>
                <ul className="topList">
                    <li className='topListItem'>
                        <Link to='/login' className='link' onClick={handleLogout}>LOGOUT</Link >
                    </li>
                </ul>
            </>
            ) 
            :
            (
                <>
                    <ul className="topList">
                        <li className='topListItem'>
                            <Link  to="/login" className='link'>LOGIN</Link >
                        </li>
                        <li className='topListItem'>
                            <Link  to="/register" className='link'>REGISTER</Link >
                        </li>
                    </ul>
                </>
            )
        }
            
            <i className="topSearchIcon fa-brands fa-searchengin"></i>
        </div>
    </div>
  )
}
