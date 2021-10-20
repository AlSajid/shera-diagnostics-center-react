import React from 'react';
import notFound from './404.jpg';

const NotFound = () => {
    return (
        <div className="container">
            <img className="img-thumbnail" src={notFound} alt="404" />
        </div>
    );
};

export default NotFound;