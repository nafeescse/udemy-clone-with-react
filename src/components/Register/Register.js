import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let errorMsg;
    let load;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (error) {
        errorMsg = 
            <p>{error.message}</p>;

    }
    if (loading) {
        load = <div>
            <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    }
    if (user) {
        navigate('/login')

    }
    
    return (
        <div className='login grid grid-cols-1 md:grid-cols-2 border-2 border-rose-700'>
            <div className=" bg-red-400 flex flex-col justify-center items-center text-white p-10">
                <h1>Welcome, Back!!</h1>
                <SocialLogin></SocialLogin>
                <p className='text-center px-1'>To keep connected with us please login with your personal info.</p>

                <button onClick={() => { navigate('/login') }} className='bg-white rounded-pill text-red-800 fw-bold px-4 py-2 flex items-center'>LOGIN
                    <ChevronDoubleRightIcon className="ms-2 h-5 w-5 text-red-800" />
                </button>

            </div>

            <div className="photo bg-white flex flex-col justify-center items-center">
                <div className='w-50 mx-auto py-2'>


                    <h2 className='text-center text-red-800'>Register Here</h2>

                    <Form className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>

                        <div className='flex justify-center'>{load}</div>
                        <small className='text-danger'>{errorMsg}</small>

                        <div className='d-flex justify-content-between align-items-center'>

                            <small>Already Joined? <Link className='text-decoration-none' to='/login'>Login Now</Link></small>

                            <Button onClick={()=> {
                                createUserWithEmailAndPassword(email, password)
                            }}
                                variant="danger" type="submit">
                                Submit
                            </Button>
                        </div>

                    </Form>
                   

                </div>

            </div>

        </div>
    );
};

export default Register;