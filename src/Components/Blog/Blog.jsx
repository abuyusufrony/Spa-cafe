import PropTypes from 'prop-types';
import React from 'react';
import { FaBookmark } from "react-icons/fa";






const Blog = ({ blg, addBookmarks, addReadingTime }) => {
    console.log(addBookmarks)
    console.log(blg)
    console.log(addReadingTime)
    const { title, cover, author_img, reading_time, author, posted_date, hashtag } = blg;
    return (
        <div className='mb-8 space-y-4'>
            <img className='w-full mb-4 rounded-lg shadow-lg shadow-amber-400' src={cover} alt={`cover from ${title}`} />
            <div className='profile-container flex justify-between items-center'>
                <div className='flex'><img className='w-16 rounded-full h-15' src={author_img} alt="" />
                    <div className='ml-4 text-2xl'> <p>{author}</p>
                        <p>{posted_date}</p></div>

                </div>

                <div className='flex'>
                    <div><span> {reading_time}reading time</span></div>
                    <button onClick={() => { addBookmarks(blg) }} className='cursor-pointer ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-2'>{title}</h2>
            <p>{hashtag.map(h => <span><a href="">#{h}</a></span>)
            }</p>
            <button onClick={() => { addReadingTime(reading_time) }} className='cursor-pointer text-blue-400'>Mark as Read</button>
        </div>
    );
};


export default Blog;