import React, { useState }from 'react';

import Navbar from './Components/Navbar';
import Routing from './Components/Routing';
import Footer from './Components/Footer';

import './index.css';

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-700 dark:text-gray-200 min-h-screen'>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Routing />
          <Footer />
      </div>
    </div>
  )
}

export default App