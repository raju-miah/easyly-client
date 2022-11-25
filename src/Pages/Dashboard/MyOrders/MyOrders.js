import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })

    return (
        <div>
            <h2 className='text-5xl text-center mt-3'>My Orders</h2>

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

                                <td>{booking.price}</td>
                                <td>
                                    <button className='btn btn-warning'>Pay</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;