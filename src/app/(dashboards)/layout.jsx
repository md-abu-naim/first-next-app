import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid col-span-12'>
            <div className='col-span-3'>
                <ul>
                    <li>list</li>
                    <li>nai</li>
                    <li>kal</li>
                </ul>
            </div>
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;