import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const handelAddProducts = data => {
        data.email = user.email;
        console.log(data);


        fetch('http://localhost:5000/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Product added successfully');
                    navigate('/dashboard/myproduct');
                }

            })
    }

    return (
        <div>
            <h2 className='text-5xl text-center mt-3 mb-5'>Add Your Product</h2>
            <div className='mt-12 flex justify-center items-center '>
                <div className='w-[700px] max-md:w-96 p-7 border rounded-lg bg-green-100'>

                    <form onSubmit={handleSubmit(handelAddProducts)}>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" {...register("name", {
                                required: 'Name is required'
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Image URL</span>
                            </label>
                            <input type="text" {...register("img", {
                                required: 'img is required'
                            })} className="input input-bordered w-full " />
                            {errors.img && <p className='text-red-500'>{errors.img?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Meet Location</span>
                            </label>
                            <input type="text" {...register("location", {
                                required: 'location is required'
                            })} className="input input-bordered w-full " />
                            {errors.location && <p className='text-red-500'>{errors.location?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Resell Price</span>
                            </label>
                            <input type="text" {...register("resllprice", {
                                required: 'Resell Price is required'
                            })} className="input input-bordered w-full " />
                            {errors.resllprice && <p className='text-red-500'>{errors.resllprice?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Original Price</span>
                            </label>
                            <input type="text" {...register("originalprice", {
                                required: 'Original Price is required'
                            })} className="input input-bordered w-full " />
                            {errors.originalprice && <p className='text-red-500'>{errors.originalprice?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">How many Years Used this Product</span>
                            </label>
                            <input type="text" {...register("yearused", {
                                required: 'Used Year is required'
                            })} className="input input-bordered w-full " />
                            {errors.yearused && <p className='text-red-500'>{errors.yearused?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" {...register("sellername", {
                                required: 'Seller name is required'
                            })} defaultValue={user?.displayName} readOnly className="input input-bordered w-full " />
                            {errors.sellername && <p className='text-red-500'>{errors.sellername?.message}</p>}
                        </div>


                        {/* <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Details</span>
                            </label>
                            <input type="text" {...register("description", {
                                required: 'Description is required'
                            })} className="input input-bordered w-full " />
                            {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}
                        </div> */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea {...register("description")} placeholder="About you"
                                className="textarea textarea-bordered w-full h-[145px]" />
                            {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}
                        </div>




                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input type="text" {...register("phonenumber", {
                                required: 'Contact Number is required'
                            })} className="input input-bordered w-full " />
                            {errors.phonenumber && <p className='text-red-500'>{errors.phonenumber?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Select Date and Time</span>
                            </label>
                            <input type="datetime-local" {...register("time", {
                                required: 'date time is required'
                            })} placeholder="Your Name" className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Select Product Brand Name</span>
                            </label>
                            <select {...register("brandName", { required: true })}
                                className="select select-bordered w-full"
                            >
                                <option value="Dell">Dell</option>
                                <option value="Apple">Apple</option>
                                <option value="Asus">Asus</option>
                            </select>
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select {...register("condition", { required: true })}
                                className="select select-bordered w-full"
                            >
                                <option value="good">good</option>
                                <option value="fair">fair</option>
                                <option value="excellent">excellent</option>
                            </select>
                        </div>

                        <input className='btn btn-accent w-full mt-7' value="Add Product" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;