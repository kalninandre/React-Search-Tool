import React from 'react';
import { Link } from 'react-router-dom'

import Search from './Search';

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='flex p-3 flex-wrap sm: justify-between justify-center items-center border-b border-gray-200 dark: border-gray-700'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to='/'>
          <p className='text-1xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900'>
            Search Tool
          </p>
        </Link>
        <button className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1'
        type='button' onClick={() => setDarkTheme(!darkTheme)}>
          {!darkTheme ? 'Light' : 'Dark'}
        </button>
      </div>
      <Search />
    </div>
  )
}

export default Navbar;