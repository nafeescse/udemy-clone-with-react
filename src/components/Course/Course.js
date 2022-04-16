import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { id, img, name, place, price } = props.course;
    return (
        <div>
            <Row>
            <Card className='shadow-xl' style={{ width: '20rem' }}>
                <Card.Img variant="top" className='rounded-3 my-2' src= {img} />
                <Card.Body className='d-flex flex-column justify-content-center '>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    {/* <p className='text-center'>
                    {class}
                    </p> */}
                    <p className='text-center'>
                       Price: {price}
                    </p>
                    <Link to='/checkout'><Button  variant="primary">Book Now</Button></Link>
                </Card.Body>
            </Card>
        </Row>
        </div>
    );
};

export default Course;