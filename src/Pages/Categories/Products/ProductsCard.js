import React from 'react';

const ProductsCard = ({ pro }) => {
    console.log(pro)

    const { img, name, location, resllprice, originalprice, yearused, time, sellername, condition, description, phonenumber } = pro;



    return (
        <div>
            <div className="card w-[400px] mx-auto bg-amber-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Model Name: {name}</h2>
                    <p className='font-bold'>Location: {location}</p>
                    <p className='font-bold'>Resell Price: ${resllprice}</p>
                    <p className='font-bold'>Original Price: ${originalprice}</p>
                    <p className='font-bold'>Year Of Use: {yearused} Years</p>
                    <p className='font-bold'>Condition: {condition}</p>
                    <p className='font-bold'>Time: {time}PM</p>
                    <p className='font-bold'>Seller Name: {sellername} <span> <input type="checkbox" checked readOnly className="checkbox checkbox-accent" /></span></p>
                    <p className='font-bold'>Phone: {phonenumber}</p>
                    <p>Details: {description}</p>

                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;