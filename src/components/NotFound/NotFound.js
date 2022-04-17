import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorpic from '../../errorr.png'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='h-screen bg-red-200'>
            <img onClick={() => {navigate('/')}} className='p-8 mx-auto' src={errorpic} alt="" />
            <p onClick={() => {navigate('/')}} className='text-3xl text-center text-red-700'>Click the image to Jump to Homepage</p>
        </div>
    );
};

export default NotFound;