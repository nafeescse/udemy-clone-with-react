import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
const Footer = () => {
    return (
        <div className='bg-red-800 flex flex-col items-center justify-center mt-5 p-2'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className="footer1  m-2">
                    <img src={logo} alt="" />
                    <p className='text-pink-100 text-justify mx-3 '><strong>TeachMe</strong> is such a platform where I have displayed the courses that I provide. Basically I always love to teach people whatever I know. That's why I've created <strong>TeachMe</strong> platform. Hope you guys will find it helpful. </p>
                    </div>
                    <div className="foote m-2 flex flex-col">
                        <p className='text-xl text-pink-100 text-center'>Main Menu</p>
                        <div className='flex mx-auto '><Link className='px-2 mx-auto text-decoration-none text-pink-100' to="/">Home</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-pink-100' to="/courses">Courses</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-pink-100' to="/blogs">Blogs</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-pink-100' to="/about">About</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-pink-100' to="/login">Login</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-pink-100' to="/register">Register</Link></div>

                    </div>
            </div>
            <div style={{height: '2px',  backgroundColor: 'white', width: '100%'}} className=' bg-white'></div>

            <small className='text-pink-100'>Copyright 2022 TeachMe</small>

        </div>
    );
};

export default Footer;