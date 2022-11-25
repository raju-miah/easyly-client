import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const Categories = () => {

    const { data: category, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='mt-10'>
            <h2 className='text-5xl text-center'>Products Categories</h2>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    category.map((categories, i) => <div
                        key={i}
                    >
                        <Link to={`/categories/${categories.categoryId}`}>
                            <div className="card text-white p-6 m-12 md:card-side shadow-xl bg-accent">
                                <div className="card-body">
                                    <h2 className="text-5xl text-center font-bold">{categories.brandName}</h2>
                                </div>
                            </div>
                        </Link>

                    </div>)
                }
            </div>

            {/* product card */}

            <h2 className='text-5xl text-center my-12'>Ad</h2>

            <div className="card w-[400px] mx-auto bg-amber-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/XVcH4gm/asus.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Model Name: Apple X441N</h2>
                    <p className='font-bold'>Location: Dhaka</p>
                    <p className='font-bold'>Resell Price: 20000 TK</p>
                    <p className='font-bold'>Original Price: 40000 TK</p>
                    <p className='font-bold'>Year Of Use: 2 Years</p>
                    <p className='font-bold'>Time: 09:27 pm</p>
                    <p className='font-bold'>Seller Name: John Duo <span> <input type="checkbox" checked readOnly className="checkbox checkbox-accent" /></span></p>

                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categories;