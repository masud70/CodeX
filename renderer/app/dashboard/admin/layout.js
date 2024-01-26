import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full lg:10/12">{children}</div>
        </div>
    );
};

export default Layout;
