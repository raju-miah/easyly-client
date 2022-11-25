import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ categori }) => {

    const { _id, brandName, logo } = categori;

    return (
        <div>

            <div className="card card-compact w-96 bg-cyan-300 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-5xl text-bold">{brandName}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${_id}`}>
                            <button className="btn btn-warning">View Products</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoriesCard;