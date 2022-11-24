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

        </div>
    );
};

export default Categories;