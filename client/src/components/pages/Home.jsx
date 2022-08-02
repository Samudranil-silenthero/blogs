import  './home.css'
import Header from '../header/Header'
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
export default function Home() {
  const [all_posts ,setPosts] =useState([]);
  const {search}= useLocation();
  console.log(search);
  useEffect(() => {
    const fetchPosts= async ()=>{
        //const res1= await axios.get("/confirm");
        const res= await axios.get("/posts"+search);
        //console.log(res);
        setPosts(res.data);
    }
    fetchPosts();
  }, [search])
  
  return (
    <div>
        <Header/>
        <div className="home">
          <Posts all_posts={all_posts}/>
          <Sidebar/>
        </div>
    </div>
  )
}
