import React from 'react';
import toast from 'react-hot-toast';

const ProductsCard = ({ pro, setBookingProduct }) => {
    // console.log(pro)

    const { img, name, location, resllprice, originalprice, yearused, time, sellername, condition, description, phonenumber } = pro;

    const handelReport = report => {

        // console.log(report);

        const items = {
            img: report.img,
            name: report.name,
            brandName: report.brandName,
            sellername: report.sellername
        }

        console.log(items);


        fetch('http://localhost:5000/report', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Product Reported Successfully');
                }

            })


    }

    return (
        <div className='mt-12'>

            <div className="card lg:card-side bg-green-100 mx-12 shadow-xl">

                <img src={img} alt="Shoes" className="rounded-xl" />

                <div className="card-body">
                    <h2 className="card-title">Model Name: {name}</h2>
                    <p className='font-bold'>Location: {location}</p>
                    <p className='font-bold'>Resell Price: ${resllprice}</p>
                    <p className='font-bold'>Original Price: ${originalprice}</p>
                    <p className='font-bold'>Year Of Use: {yearused} Years</p>
                    <p className='font-bold'>Condition: {condition}</p>
                    <p className='font-bold'>Posted on: {time}</p>
                    <p className='font-bold'>Seller Name: {sellername}</p>
                    <p className='font-bold'>Phone: {phonenumber}</p>
                    <p><strong>Details:</strong> {description}</p>
                    <div className="card-actions">
                        <label
                            onClick={() => setBookingProduct(pro)}
                            htmlFor="book=now-modal"
                            className="btn btn-accent">
                            BOOK NOW
                        </label>

                        <button
                            onClick={() => handelReport(pro)}

                            className='btn btn-error'>Report Product</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;