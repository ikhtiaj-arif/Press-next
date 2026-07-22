import React from 'react';

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8  '>
            {children}
        </div>
    );
};

export default AuthLayout;