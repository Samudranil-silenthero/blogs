import axios from 'axios';
import { useEffect, useState , useContext} from 'react';
import { useLocation } from 'react-router-dom'
import  './singlePost.css'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function SinglePost() {

  const path= useLocation().pathname.split('/')[2]; //fetch data for single post using this postid
  const location=useLocation();
  const Pf= "http://localhost:5000/images/";
  const {user}=  useContext(Context);
  const [single_post,setPost]= useState([]);
  const [title,setTitle]= useState("");
  const [desc,setDesc]= useState("");
  const [updateMode,setUpdateMode]= useState(false);

  useEffect(()=>{
    const getPost= async()=>{
      const res= await axios.get("/posts/"+path); 
     setPost(res.data);
    }
    getPost();
  },[path]);
    
  const handleDelete= async()=>{
    try{
      await axios.delete(`/posts/${single_post._id}`,{data:{username:user.username}});
      window.location.replace("/");
    }catch(err){
      console.log(err)
    }
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${single_post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
      window.location.replace("/post/"+single_post._id);
    } catch (err) {console.log(err)}
  };

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          {single_post.photo && 
          (
            <img src={Pf+single_post.photo} alt="error image" className="singlePostImg" />
          )}
            
            {
              updateMode?
              (
                <input placeholder='Title' type="text" defaultValue={single_post.title}  className='writeInput' onChange={(e) => setTitle(e.target.value)}></input>
              ):
              (
                <h1 className="singlePostTitle">{single_post.title}
                  {single_post.username === user?.username &&
                    (<div className="singlePostEdit">
                      <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                      <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                    </div>)
                  }
                </h1>
              )
            }
           
            <div className="singlePostInfo">
              <span className='singlePostAuthor'>Author:
                <Link to= {`/?user=${single_post.username}`} className='link '>
                  <b>{single_post.username}</b>
                </Link>
              </span>
              <span className='singlePostDate'><b>{new Date(single_post.createdAt).toDateString()}</b></span>
            </div>
            
            {updateMode ? 
              (<textarea placeholder='Description' className='writeInput' defaultValue={single_post.desc}  onChange={(e) => setDesc(e.target.value)}
                  />
              ) : 
              (<p className="singlePostDesc">{single_post.desc}</p>)}

            {updateMode && (
              <button onClick={handleUpdate}>
                Update
              </button>
            )}

        </div>
    </div>
  )
}
