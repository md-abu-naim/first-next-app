import React from 'react';

const SlugsPage = async({params}) => {
    const p = await params
    console.log(p);
    return (
        <div>
        <h1>Slugs pages</h1>
        </div>
    );
};

export default SlugsPage;