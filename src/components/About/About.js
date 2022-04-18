import React from 'react';
import mine from '../../mine.jpg';

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center m-2'>
            <h2 className='py-3 text-decoration-underline text-danger'>ABOUT ME</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='w-75 lg:w-50  mx-auto'><img className='  rounded-xl' src={mine} alt="" /></div>
                <div className='w-75 m-auto py-3'>
                    <h2 className=''>Hello, I'm A. Rahman</h2>
                    <p className='text-justify'>I'm currently working as a fulltime course instructor of Physics, Chemistry & Mathematics. I love to teach people whatever i know. The ultimate goal of teaching is to promote learning. For the most part, learning takes place in many different circumstances and contexts. Although everyone is capable of learning, a student's desire to learn is a vital to mastering new concepts, principles and skills.
                    My career goal will be to develop and promote creativity and high-order thinking skills that increase the performance of the students. And to secure a position as a teacher and utilize my dedication to foster quality education required for a child's development </p>
                </div>
            </div>
        </div>
    );
};

export default About;