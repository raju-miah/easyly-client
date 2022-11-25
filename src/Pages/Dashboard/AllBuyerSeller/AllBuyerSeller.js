import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyerSeller = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h2 className='text-5xl text-center mt-3 mb-5'>All users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Buyer / Seller / Admin</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr
                                key={user._id}
                            >
                                <th>{1 + i}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyerSeller;