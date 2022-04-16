import { Button, Carousel } from 'react-bootstrap';
import logo from '../../logo.png';
import batch from '../../batch.jpg';
// import private from '../../private.jpg';
import care from '../../care.jpg';
import React from 'react';
import svg from '../../download-svg.png';

const Banner = () => {
    return (

        <div className='grid grid-cols-1 md:grid-cols-2  bg-red-200 h-screen'>
            <div className=' flex flex-col justify-center items-center'><div className='fs-3 text-red-900'>
                Learn New Things
                <h2 className='text-5xl'>IN COMFORT <br /> OF YOUR HOME</h2>
                <Button className='bg-danger rounded-pill outline-none'>See Courses</Button>
            </div>
            </div>
            <Carousel className='my-auto'>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto w-50 lg:w-100"
                        src={svg}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={care}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={batch}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;