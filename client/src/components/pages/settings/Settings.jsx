import './settings.css'
import Sidebar from '../../sidebar/Sidebar'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../../context/Context'
import axios from 'axios'
export default function Settings() {

const {user,dispatch}= useContext(Context);
const [file, setFile] = useState(null);
const [password, setPassword] = useState("");
const [err,setError]=useState(false);
const [success,setSuccess]=useState(false);
const [error,seterrMsg]=useState("");

const PF = "http://localhost:5000/images/"

const handleSubmit= async(e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"});
    setError(false);
    const updatedUser={
        userId:user._id,
        password
    };
    if(file){
        const data= new FormData();
        const filename= Date.now()+file.name;
        data.append("name",filename);
        data.append("file",file );
        updatedUser.profilePic= filename;
        try{
            await axios.post("/upload", data);
        }
        catch(err){
            console.log("Profile pic not changed")
        }
    }
    try{
        const res =await axios.put("/users/"+user._id, updatedUser );
        setSuccess(true);
        dispatch({type:"UPDATE_SUCCESS", payload:res.data});
        window.location.replace("/");
    }catch(err){
      setError(true);
      seterrMsg(err.response.data);
      dispatch({type:"UPDATE_FAILURE"});
    }
    
};
  return (
    
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={file ? URL.createObjectURL(file) : PF+user.profilePic}    alt=""/>
                    <label htmlFor='fileInput'>
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}
                onChange={(e)=> setFile(e.target.files[0])} />
                </div>
                <label >Username</label>
                <input type="text" placeholder={user.username} disabled></input>
                <label >Email</label>
                <input type="text" placeholder={user.email} disabled></input>
                <label >Password</label>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <button className="settingsUpdate" type="submit" >Update</button>
            </form>
            {err && <span className='errMsg'><b>{error}</b></span>}
        </div>
        <Sidebar/>
    </div>
  )
}
