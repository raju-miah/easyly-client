import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-green-100 p-14'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src="https://i.ibb.co/LJmYTwm/home-1.jpg" className=" rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">EASYLY</h1>
                        <p className="py-6">We are resell used product, <br /> if you are searching for a used branded laptop and buying from online <br /> then you are in right website.</p>
                        <Link to="/signup">
                            <button className="btn btn-accent">Sing Up Free</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;