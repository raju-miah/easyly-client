import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from '../BookNowModal/BookNowModal';
import ProductsCard from './ProductsCard';

const Products = () => {

    // booking modal state
    const [bookingProduct, setBookingProduct] = useState(null);

    // loaded data with loader
    const products = useLoaderData();


    return (
        <div>
            <h2 className='text-5xl text-center'>Used {products.brandName} Brand Products</h2>

            {/* className='grid mt-8 mx-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' */}
            <div>
                {
                    products.map((pro, i) => <ProductsCard
                        key={i}
                        pro={pro}
                        setBookingProduct={setBookingProduct}
                    ></ProductsCard>)
                }
            </div>
            {
                bookingProduct &&
                <BookNowModal
                    bookingProduct={bookingProduct}
                    setBookingProduct={setBookingProduct}
                ></BookNowModal>
            }
        </div>
    );
};

export default Products;