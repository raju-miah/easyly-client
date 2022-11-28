import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import AdvertiseHomeCard from './AdvertiseHomeCard';

const AdvertiseHome = () => {


    const { data: advertise = [], isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://easyly-server.vercel.app/advertise');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div className='mt-12'>

            {
                advertise.length === 0 ?
                    <></>
                    :
                    <>

                        <h2 className='text-5xl text-center mb-5'>Advertise Item</h2>

                        {
                            advertise.map(add => <AdvertiseHomeCard
                                key={add._id}
                                add={add}
                            ></AdvertiseHomeCard>)
                        }


                    </>
            }


        </div>
    );
};

export default AdvertiseHome;