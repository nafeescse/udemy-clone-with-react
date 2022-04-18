import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Course = (props) => {
    const {  img, name, price } = props.course;
    const navigate = useNavigate();
    return (
        <div>
            <Row>
            <Card className='shadow-xl' style={{ width: '20rem' }}>
                <Card.Img variant="top" className='rounded-3 my-2' src= {img} />
                <Card.Body className='flex flex-col justify-center items-center'>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    {/* <p className='text-center'>
                    {class}
                    </p> */}
                    <p className='text-center'>
                       Price: {price}
                    </p>
                    <Button onClick={()=> {navigate('/checkout')}}  variant="danger">Book Now</Button>
                </Card.Body>
            </Card>
        </Row>
        </div>
    );
};

export default Course;