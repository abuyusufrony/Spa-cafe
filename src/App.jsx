

import './App.css'
import Pora from './Pora'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingtime] = useState(0)
  const addBookmarks = (book) => {
    console.log('bookmarks are adding')
    const newBookmarks = [...bookmarks, book]
    setBookmarks(newBookmarks)

  }


  const addReadingTime = (time, id) => {
    const setNewReadingTime = readingTime + time;
    setReadingtime(setNewReadingTime)
    const removebookmarkswithid = bookmarks.filter(books => books.id !== id);
    setBookmarks(removebookmarkswithid)
  }

  return (
    <>

      <Header></Header>
      <div className="book-blog-co md:flex max-w-7xl mx-auto ">
        <Blogs addBookmarks={addBookmarks} addReadingTime={addReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

      </div>
    </>
  )
}

export default App
