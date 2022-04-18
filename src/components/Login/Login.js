
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  ChevronDoubleRightIcon } from '@heroicons/react/solid'
import './Login.css'
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate(from, {replace: true});

    }
    return (
        <div className='login grid grid-cols-1 md:grid-cols-2 border-2 border-rose-700'>
            <div className="photo bg-white flex flex-col justify-center items-center">
                <div className='w-50 mx-auto'>


                    <h2 className='text-center text-red-800'>Login With</h2>
                    <SocialLogin></SocialLogin>

                    <Form className=''>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>

                        <div className='d-flex justify-content-between align-items-center'>

                            <p>New to TeachMe? <Link className='text-decoration-none' to='/register'>Join Now</Link></p>

                            <Button onClick={() => { signInWithEmailAndPassword(email, password) }}
                                variant="danger" type="submit">
                                Submit
                            </Button>
                        </div>

                    </Form>
                    

                </div>

            </div>
            <div className=" bg-red-400 flex flex-col justify-center items-center text-white">
                <h1>Hello, Dear!</h1>
                <p className='text-center'>Enter your personal details and start journey with us</p>
                <button onClick={()=> {navigate('/register')}} className='bg-white rounded-pill text-red-800 fw-bold px-4 py-2 flex items-center'>SIGN UP <ChevronDoubleRightIcon className="ms-2 h-5 w-5 text-red-800"/></button></div>
        </div>
    );
};

export default Login;