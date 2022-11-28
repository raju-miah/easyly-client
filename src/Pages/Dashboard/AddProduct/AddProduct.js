import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    // add product function here

    const handelAddProducts = data => {
        data.email = user.email;
        console.log(data);


        fetch('https://easyly-server.vercel.app/addproducts', {
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
                                <span className="label-text text-xl">Product Name</span>
                            </label>
                            <input type="text" {...register("name", {
                                required: 'Name is required'
                            })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Product Image URL</span>
                            </label>
                            <input type="text" {...register("img", {
                                required: 'img is required'
                            })} className="input input-bordered w-full " />
                            {errors.img && <p className='text-red-500'>{errors.img?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Meet Location</span>
                            </label>
                            <input type="text" {...register("location", {
                                required: 'location is required'
                            })} className="input input-bordered w-full " />
                            {errors.location && <p className='text-red-500'>{errors.location?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Your Resell Price</span>
                            </label>
                            <input type="text" {...register("resllprice", {
                                required: 'Resell Price is required'
                            })} className="input input-bordered w-full " />
                            {errors.resllprice && <p className='text-red-500'>{errors.resllprice?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Product Original Price</span>
                            </label>
                            <input type="text" {...register("originalprice", {
                                required: 'Original Price is required'
                            })} className="input input-bordered w-full " />
                            {errors.originalprice && <p className='text-red-500'>{errors.originalprice?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">How many Years Used this Product</span>
                            </label>
                            <input type="text" {...register("yearused", {
                                required: 'Used Year is required'
                            })} className="input input-bordered w-full " />
                            {errors.yearused && <p className='text-red-500'>{errors.yearused?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Your Name</span>
                            </label>
                            <input type="text" {...register("sellername", {
                                required: 'Seller name is required'
                            })} defaultValue={user?.displayName} readOnly className="input input-bordered w-full " />
                            {errors.sellername && <p className='text-red-500'>{errors.sellername?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Product Description</span>
                            </label>
                            <textarea {...register("description")}
                                className="textarea textarea-bordered w-full h-[145px]" />
                            {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Contact Number</span>
                            </label>
                            <input type="text" {...register("phonenumber", {
                                required: 'Contact Number is required'
                            })} className="input input-bordered w-full " />
                            {errors.phonenumber && <p className='text-red-500'>{errors.phonenumber?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Select Date and Time</span>
                            </label>
                            <input type="datetime-local" {...register("time", {
                                required: 'date time is required'
                            })} placeholder="Your Name" className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Select Product Brand Name</span>
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
                                <span className="label-text text-xl">Condition</span>
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