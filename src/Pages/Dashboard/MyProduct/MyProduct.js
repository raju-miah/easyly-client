import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyProduct = () => {

    const { user } = useContext(AuthContext);

    // used react query here for get seller added product

    const { data: myproduct = [], refetch } = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })


    const handelDeleteProduct = id => {
        console.log(id);

        fetch(`http://localhost:5000/myproduct/${id}`, {
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

        fetch(`http://localhost:5000/advertise/${id}`, {
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


    const handelAdvertiseProduct = (add) => {
        // console.log(add)

        // , _id
        // add.id = _id

        // setDis(true);
        // setDis(true);
        // delete add._id
        // const body = {
        //     ...add
        // }
        // console.log(body)

        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Your Advertise posted successfully');

                }

            })


    }



    return (
        <div>

            {
                myproduct.length === 0 ?
                    <>
                        <h2 className='text-5xl text-center mt-3 mb-5'>You don't added any product</h2>
                        <div className='flex items-center justify-center'>
                            <Link to="/dashboard/addproduct">
                                <button className='btn btn-accent'>Go Add Product</button>
                            </Link>
                        </div>
                    </>
                    :
                    <>

                        <h2 className='text-5xl text-center mt-3 mb-5'>This is the Product you are Added</h2>

                        <div className="overflow-x-auto">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Sales Status</th>
                                        <th>Advertise Product</th>
                                        <th>Delete Product</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        myproduct.map((product, i) => <tr
                                            key={product._id}
                                        >
                                            <th>{1 + i}</th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="rounded w-24 h-24">
                                                            {

                                                                <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product.name}</td>
                                            <td>${product.resllprice}</td>
                                            <td>
                                                Available or Sold
                                            </td>

                                            <td>

                                                {/* , product._id */}

                                                <button
                                                    onClick={() => { handelAdvertiseProduct(product) }}
                                                    className='btn btn-warning'>Advertise</button>
                                            </td>

                                            <td>
                                                <button
                                                    onClick={() => handelDeleteProduct(product._id)}

                                                    className='btn btn-error'>Delete</button>
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

export default MyProduct;