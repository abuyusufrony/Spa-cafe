

import './App.css'
import Pora from './Pora'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const addBookmarks = (book) => {
    console.log('bookmarks are adding')
  }

  return (
    <>

      <Header></Header>
      <div className="book-blog-co md:flex max-w-7xl mx-auto ">
        <Blogs addBookmarks={addBookmarks}></Blogs>
        <Bookmarks></Bookmarks>

      </div>
    </>
  )
}

export default App
