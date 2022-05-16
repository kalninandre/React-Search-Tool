import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

const Navbar = ({ darkThemeHandler }) => {
    return (
        <div className='flex py-3 px-4 flex-wrap sm:justify-between items-center border-b border-gray-200 dark:border-gray-700'>
            <div className='flex justify-between items-center w-screen'>
                <Link to='/'>
                    <p className='text-1xl bg-blue-500 font-bold text-white py-1 px-3 rounded-md dark:bg-gray-50 dark:text-gray-900'>
                        Search Tool
                    </p>
                </Link>
                <button
                    className='text-md dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-md px-3 py-1'
                    type='button'
                    onClick={darkThemeHandler}
                >
                    Change Theme
                </button>
            </div>
            <Search />
        </div>
    );
};

export default Navbar;
