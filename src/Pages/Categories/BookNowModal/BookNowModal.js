import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookNowModal = ({ bookingProduct, setBookingProduct }) => {

    // booking modal here

    const { name, resllprice, img } = bookingProduct;

    const { user } = useContext(AuthContext);

    const handelProductBooking = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;

        const productBooking = {
            buyerName: name,
            buyerEmail: email,
            productName,
            price,
            buyerPhoneNum: phoneNumber,
            meetLocation: location,
            img
        }

        console.log(productBooking);

        fetch('https://easyly-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBookingProduct(null);
                    toast.success('Your Booking Confirmed');
                }

            })







    }

    return (
        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="book=now-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book=now-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-center font-bold">Book Your Product Now</h3>
                    <form onSubmit={handelProductBooking}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Buyer Name</span>
                            </label>
                            <input name='name' type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Buyer Email</span>
                            </label>
                            <input name='email' type="text" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Product Name</span>
                            </label>
                            <input name='productName' type="text" defaultValue={name} readOnly className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Product Price</span>
                            </label>
                            <input name='price' type="text" defaultValue={resllprice} readOnly className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-bold"
                                >Buyer Phone Number</span>
                            </label>
                            <input name='phoneNumber' type="text" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label text-xl font-bold">
                                <span className="label-text text-xl font-bold">Meeting Location</span>
                            </label>
                            <input name='location' type="text" className="input input-bordered w-full" />
                        </div>

                        <input type="submit" className='btn btn-warning w-full mt-5' value="Submit for Book" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookNowModal;