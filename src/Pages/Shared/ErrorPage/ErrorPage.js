import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img className='w-2/4 mx-auto' src="https://i.ibb.co/2SN1zBm/undraw-bug-fixing-oc7a.png" alt="" />

            <div className='text-center'>
                <h2>404 : Page not found</h2>
                <p className='mb-2'>Something is wrong check your internet</p>
                <Link to='/'><button className='btn'>Go back to Home Page</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;