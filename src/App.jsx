

import './App.css'
import Pora from './Pora'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {


  return (
    <>

      <Header></Header>
      <div className="book-blog-co md:flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>

      </div>
    </>
  )
}

export default App
