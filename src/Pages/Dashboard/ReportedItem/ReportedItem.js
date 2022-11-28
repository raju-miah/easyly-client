import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const ReportedItem = () => {

    // load report data with react query

    const { data: report = [], isLoading, refetch } = useQuery({
        queryKey: ['report'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/report');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    // console.log(report)

    // delete report function

    const handelDeleteReport = id => {
        console.log(id);


        fetch(`http://localhost:5000/report/${id}`, {
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

            {

                report.length === 0 ?
                    <>
                        <h2 className='text-5xl mt-5 text-center'>No items reported</h2>
                    </>
                    :
                    <>

                        <>
                            <h2 className='text-5xl text-center mt-3 mb-5'>Reported Product List</h2>

                            <div className="overflow-x-auto">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Product Image</th>
                                            <th>Product Name</th>
                                            <th>Product Brand</th>
                                            <th>Seller Name</th>
                                            <th>Delete Product</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            report.map((repo, i) => <tr
                                                key={repo._id}
                                            >
                                                <th>{1 + i}</th>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="rounded w-24 h-24">
                                                                {

                                                                    <img src={repo.img} alt="Avatar Tailwind CSS Component" />
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>{repo.name}</td>
                                                <td>
                                                    {repo.brandName}
                                                </td>

                                                <td>
                                                    {repo.sellername}
                                                </td>

                                                <td>
                                                    <button
                                                        onClick={() => handelDeleteReport(repo._id)}
                                                        className='btn btn-error'>Delete</button>
                                                </td>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>


                        </>

                    </>

            }

        </div>
    );
};

export default ReportedItem;