import React from 'react';

const Expert = ({expert}) => {
    const{name,img,expertige} = expert;
    return (
        <div className='col-lg-4 col-6 gx-2'>
            <img src={img }alt="" />
            <h3>{name}</h3>
            <h5 className='text-danger'>{expertige}</h5>
        </div>
    );
};

export default Expert;