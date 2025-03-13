import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='md:w-2/3'>

            <h2>Total Data are {blogs.length}</h2>
            {
                blogs.map(b => <Blog blg={b}></Blog>)
            }

        </div>
    );
};

export default Blogs;