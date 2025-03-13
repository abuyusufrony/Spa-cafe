import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between p-4 items-center border-b-2 max-w-7xl mx-auto  '>
            <h1 className='text-4xl font-bold '>Knowlage Cafe</h1>
            <img src={profile} alt="" />

            {/* <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                onClick={() => alert("Clicked!")}
            >
                Order Coffe
            </button> */}
        </header>

    );
};

export default Header;