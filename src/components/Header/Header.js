import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar className='navbar bg-red-200' expand="lg">

            <Container>
                <a href='/' className='flex justify-center items-center text-2xl text-decoration-none text-red-800 fw-bold'>
                    <img className='d-flex w-1/5 ' src={logo} alt="" />TEACHME
                </a>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0 ms-auto"
                        navbarScroll
                    >
                        <Link className='px-2 mx-auto text-decoration-none text-red-700 fs-5' to="/">Home</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-red-700 fs-5' to="/courses">Courses</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-red-700 fs-5' to="/blogs">Blogs</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-red-700 fs-5' to="/about">About</Link>
                        <Link className='px-2 mx-auto text-decoration-none text-light fs-5 bg-danger rounded-pill' to="/login">Login</Link>
                        <Link className='px-2 mx-auto rounded-pill text-decoration-none text-light fs-5 bg-danger' to="/register" >Register</Link>

                        {/* {user ?
                                <img onClick={logout} className='rounded-circle w-75' src={user.photoURL} alt="" />
                                : <div><Link className='px-2 mx-2 text-decoration-none text-light fs-4 bg-danger rounded-pill' to="/login">Login</Link>
                                    <Link className='px-2 mx-2 rounded-pill text-decoration-none text-light fs-4 bg-danger' to="/register" >Register</Link></div>} */}

                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>

    );
};

export default Header;