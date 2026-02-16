import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-7xl px-4 md:px-6 mx-auto'>
            {children}
        </div>
    );
};

export default Container;