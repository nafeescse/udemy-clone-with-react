import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {
    let toast;
    const handleSubmit = () => {
        toast = alert('Thank you so much for joining us.');


    }
    return (
        <div>
            <p className='text-center text-2xl text-danger text-decoration-underline py-3 '>
                Checkout
            </p>

            <Form onSubmit={(e) => {
                e.preventDefault();
            }} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleSubmit()} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div>{toast}</div>
        </div>
    );
};

export default Checkout;