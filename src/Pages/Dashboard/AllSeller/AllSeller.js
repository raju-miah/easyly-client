import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const AllSeller = () => {

    // loaded data with react query for seller

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    // delete seller function 

    const handelDeleteSeller = id => {
        console.log(id);


        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Deleted Successfully');
                    refetch();
                }
            })
    }

    return (
        <div>

            <h2 className='text-5xl text-center mt-3 mb-5'>All Seller</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Verify Seller</th>
                            <th>Delete a Seller</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => {

                                return user.role === "seller" && <tr
                                    key={user._id}
                                >

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>

                                        <button className='btn btn-sm btn-success'>
                                            Verify
                                        </button>
                                    </td>
                                    <td>

                                        <button
                                            onClick={() => handelDeleteSeller(user._id)}

                                            className='btn btn-sm btn-error'>Delete</button>

                                    </td>
                                </tr>

                            })
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSeller;