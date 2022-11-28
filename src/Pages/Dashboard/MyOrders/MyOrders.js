import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    // user based data load for my product

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://easyly-server.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>

            {
                bookings.length === 0 ?
                    <>
                        <h2 className='text-5xl text-center mt-5'>You don't book any product</h2>

                        <div className='flex items-center justify-center mt-5'>
                            <Link to="/">
                                <button className='btn btn-accent'>Book Product</button>
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <h2 className='text-5xl text-center mt-3 mb-5'>My Orders</h2>

                        <div className="overflow-x-auto">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        bookings.map((booking, i) => <tr
                                            key={booking._id}
                                        >
                                            <th>{1 + i}</th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="rounded w-24 h-24">
                                                            {

                                                                <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{booking.productName}</td>

                                            <td>${booking.price}</td>
                                            <td>
                                                <button className='btn btn-accent'>Pay</button>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </>
            }

        </div>
    );
};

export default MyOrders;