import React from 'react';
import Boookmark from '../Bookmark/Boookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    console.log(readingTime)
    return (

        <div className='md:w-1/3 bg-gray-100 ml-5  '>

            <div className="reading text-2xl text-center bg-slate-700 text-white m-2 rounded-2xl">Reading Time{readingTime}</div>
            <h2 className='text-center text-3xl text-amber-500 font-semibold border-b '>Bookmarks</h2>


            {
                bookmarks.map(b => <Boookmark newB={b} ></Boookmark>)
            }

        </div>

    );
};

export default Bookmarks