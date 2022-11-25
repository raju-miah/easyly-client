import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from '../BookNowModal/BookNowModal';
import ProductsCard from './ProductsCard';

const Products = () => {

    const [bookingProduct, setBookingProduct] = useState(null);

    const products = useLoaderData();
    // console.log(products.brandName)
    const product = products.data;
    // console.log(product);

    return (
        <div>
            <h2 className='text-5xl text-center'>Used {products.brandName} Brand Products</h2>

            <div className='grid mt-8 mx-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    product.map((pro, i) => <ProductsCard
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