import React from 'react';

const AdvertiseHomeCard = ({ add }) => {
    // console.log(add)

    const { img, name, location, resllprice, originalprice, yearused, time, sellername, condition, description, phonenumber } = add;




    return (
        <div className='mt-7'>
            <div className="card lg:card-side bg-cyan-300 mx-12 shadow-xl">

                <img src={img} alt="Shoes" className="rounded-xl" />

                <div className="card-body">
                    <h2 className="card-title">Model Name: {name}</h2>
                    <p className='font-bold'>Location: {location}</p>
                    <p className='font-bold'>Resell Price: ${resllprice}</p>
                    <p className='font-bold'>Original Price: ${originalprice}</p>
                    <p className='font-bold'>Year Of Use: {yearused} Years</p>
                    <p className='font-bold'>Condition: {condition}</p>
                    <p className='font-bold'>Time: {time}PM</p>
                    <p className='font-bold'>Seller Name: {sellername}</p>
                    <p className='font-bold'>Phone: {phonenumber}</p>
                    <p><strong>Details:</strong> {description}</p>
                    <div className="card-actions">
                        <label
                            className="btn btn-warning">
                            BOOK Now
                        </label>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AdvertiseHomeCard;