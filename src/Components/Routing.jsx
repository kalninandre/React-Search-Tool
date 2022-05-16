import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Results from './Results';

const Routing = () => {
    const links = ['/search', '/images', '/news', '/videos'];

    return (
        <div className='p-4'>
            <Routes>
                <Route exact path='/' element={<Navigate to={'/search'} />} />
                {links.map((path, index) => (
                    <Route key={index} path={path} element={<Results />} />
                ))}
            </Routes>
        </div>
    );
};

export default Routing;
