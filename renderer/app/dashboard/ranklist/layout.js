import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-10/12 lg:w-8/12">{children}</div>
        </div>
    );
};

export default Layout;
