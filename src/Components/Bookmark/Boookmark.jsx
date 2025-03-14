import React from 'react';

const Boookmark = ({ newB }) => {
    const { title, } = newB
    return (
        <div> <div>
            <h1 className='bg-slate-200 p-4 m-4 rounded-xl'>{title}</h1>

        </div>
        </div>
    );
};

export default Boookmark;