import React from 'react';

import { NavLink } from 'react-router-dom';

const Links = () => {
    const links = [
        { url: '/search', text: 'All' },
        { url: '/images', text: 'Images' },
        { url: '/news', text: 'News' },
        { url: '/videos', text: 'Videos' },
    ];

    return (
        <div className='flex sm:justify-around justify-between items-center mt-4'>
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    to={link.url}
                    className='text-blue-600 dark:text-blue-300 border-blue-600 px-3 first:pl-0'
                >
                    {link.text}
                </NavLink>
            ))}
        </div>
    );
};

export default Links;
