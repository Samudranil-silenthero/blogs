import './post.css'
import {Link} from 'react-router-dom'

export default function Post({single_post}) {
  
  const Pf= "http://localhost:5000/images/";
  return (
    <div className='post'>
       {single_post.photo && (
          <img className='postImg' src={Pf+single_post.photo} alt=""></img>
       )}
        
        <div className="postInfo">
            <div className="postCats">
              {single_post.categories.map((category)=>(
                  <span className="postCat">{category}</span>
              ))}
            </div>
            <Link to= {`/post/${single_post._id}`} className='link'>
              <span className="postTitle">{single_post.title}</span>
            </Link>
            <hr/>
            <span className="postDate">{new Date(single_post.createdAt).toDateString()}</span>
        </div>
        <p className='postDesc'>{single_post.desc}</p>
    </div>
  )
}
