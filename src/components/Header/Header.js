import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../logo.png'
import { getAuth, signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
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
                        {user ?
                                <p onClick={logout} className='cursor-pointer text-center text-white px-2 py-1  border-0 rounded-pill  bg-danger' src={user.displayName} alt="" >Sign Out</p>
                                : <div className='grid grid-cols-1 md:grid-cols-2 '><Link className='text-center text-white px-2 py-1 m-1  border-0 rounded-pill  bg-red-600 text-decoration-none mx-1 my-1' to="/login">Login</Link>
                                <Link className='text-center text-white px-2 py-1 m-1  border-0 rounded-pill  bg-red-600 text-decoration-none mx-1 my-1' to="/register" >Register</Link></div>}
                        {/* <Link className='px-2 mx-auto text-decoration-none text-light fs-5 bg-danger rounded-pill' to="/login">Login</Link>
                        <Link className='px-2 mx-2 rounded-pill text-decoration-none text-light fs-5 bg-danger' to="/register" >Register</Link> */}

                        {/*  */}

                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>

    );
};

export default Header;