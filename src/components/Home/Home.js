import React from 'react';
import Banner from '../../components/Banner/Banner'
import Courses from '../Courses/Courses';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Banner  className='z-index-2'></Banner>
            <Courses  className='z-index-1'></Courses>
        </div>
    );
};

export default Home;