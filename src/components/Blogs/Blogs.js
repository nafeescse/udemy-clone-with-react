import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='flex flex-col justify-center items-center m-2'>
            <h2 className='py-3 text-decoration-underline text-danger'>BLOGS</h2>
            <div className='w-5/6 mx-auto py-3 grid grid-cols-1 gap-3 '>
                <Card className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-1: Difference between authorization and authentication?</h3>
                <p className='fs-5 text-justify p-3'>Answer: Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p></Card>
                <Card  className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-2: Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='fs-5 text-justify p-3'>Answer: Authentication is used by a client when the client needs to know that the server is system it claims to be. The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. In authentication, the user or computer has to prove its identity to the server or client. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints..</p></Card>
                <Card  className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-3: What other services does firebase provide other than authentication?</h3>
                <p className='fs-5 text-justify p-3'>Answer: There are many services which Firebase provides other than authentication. Most useful of them are: Cloud Firestore,Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.</p></Card>

            </div>
        </div>
    );
};

export default Blogs;