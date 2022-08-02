import './header.css'

export default function Header() {
  return (
    <div className="header">
        <img className='headerImg' src="https://images.pexels.com/photos/334978/pexels-photo-334978.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Not found"></img>
        <div className="headerTitles">
            <span className="headerTitleSm">Write and Read</span>
            <span className="headerTitleLg">Blogs</span>
        </div>
    </div>
  )
}
