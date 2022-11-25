import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import CategoriesCard from './CategoriesCard';

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
            <h2 className='text-5xl text-center'>Our Used Laptop Categories</h2>
            <div className='grid mt-8 mx-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    category.map(categori => <CategoriesCard
                        key={categori._id}
                        categori={categori}
                    >

                    </CategoriesCard>)
                }
            </div>

        </div>
    );
};

export default Categories;