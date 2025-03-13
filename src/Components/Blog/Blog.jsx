import PropTypes from 'prop-types';
import React from 'react';



const Blog = ({ blg }) => {
    console.log(blg)
    const { title, cover, author_img, reading_time, author, posted_date } = blg;
    return (
        <div className='text-3xl'>
            <img className='' src={cover} alt={`cover from ${title}`} />
            <div className='profile-container flex justify-between items-center'>
                <div className='flex'><img className='w-16 rounded-full h-15' src={author_img} alt="" />
                    <div className='ml-4'> <p>{author}</p>
                        <p>{posted_date}</p></div>

                </div>

                <div><span>reading time {reading_time}</span></div>
            </div>
            <h2>{title}</h2>
        </div>
    );
};


export default Blog;