import React from 'react';
import Boookmark from '../Bookmark/Boookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className='md:w-1/3 bg-gray-100 ml-5  '>
            <h2 className='text-center text-3xl text-amber-500 font-semibold border-b'>Bookmarks</h2>


            {
                bookmarks.map(b => <Boookmark newB={b} ></Boookmark>)
            }

        </div>
    );
};

export default Bookmarks