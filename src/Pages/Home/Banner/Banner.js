import React from 'react';

const Banner = () => {
    return (
        <div className='bg-amber-200 p-14'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src="https://i.ibb.co/LJmYTwm/home-1.jpg" className=" rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">EASYLY</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-accent">Sing Up Free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;