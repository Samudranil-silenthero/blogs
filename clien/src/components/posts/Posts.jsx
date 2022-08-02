import  './posts.css'
import Post from '../post/Post'
export default function Posts({all_posts}) {
  return (
    <div className='posts'>
      {all_posts.map((single_post)=>(
        <Post single_post={single_post}/>
      ))}
    </div>
  )
}
