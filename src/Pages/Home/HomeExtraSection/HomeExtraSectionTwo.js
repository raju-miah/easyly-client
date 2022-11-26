import React from 'react';

const HomeExtraSectionTwo = () => {
    return (
        <div className='mt-12 bg-green-100 p-14'>
            <h2 className='text-4xl mb-5 text-center'>Our Upcoming Category Brand</h2>

            <div className='grid mt-8 mx-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card card-compact w-96 bg-cyan-300 shadow-xl">
                    <figure><img src="https://logos-world.net/wp-content/uploads/2020/11/HP-Logo.png" alt="Shoes" /></figure>

                </div>

                <div className="card card-compact w-96 bg-cyan-300 shadow-xl">
                    <figure><img src="https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-2003.png" alt="Shoes" /></figure>

                </div>

                <div className="card card-compact w-96 bg-cyan-300 shadow-xl">
                    <figure><img src="https://logos-world.net/wp-content/uploads/2020/11/MSI-Logo-2019-present.png" alt="Shoes" /></figure>

                </div>


            </div>

        </div>
    );
};

export default HomeExtraSectionTwo;