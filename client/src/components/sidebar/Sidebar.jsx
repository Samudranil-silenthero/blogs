import axios from 'axios';
import { useEffect, useState } from 'react'
import  './sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
const [cat,setCat]=useState([]);
useEffect(()=>{
    const getCat=async ()=>{
        const res= await axios.get("/categories");
        setCat(res.data);
    }
    getCat();
},[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT US</span>
            <img src="https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg?cs=srgb&dl=pexels-pixabay-372748.jpg&fm=jpg" alt="">
            </img>
            <p>
                We provide a platform for you to write on anything with no word limit. Update any information if needed in your writing. Others can read your blog.
            </p>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cat.map((c)=>(
                        <Link to={`/?cat=${c.name}`} className='link'> 
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                        
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <ul className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </ul>
            </div>
        </div>
    </div>
  )
}
