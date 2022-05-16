import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <Puff color='#00BFFF' height={200} width={50} />
        </div>
    );
};

export default Loading;
