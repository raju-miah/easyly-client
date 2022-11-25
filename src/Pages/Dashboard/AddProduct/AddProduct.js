import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const handelAddProducts = data => {
        console.log(data);
    }

    return (
        <div>
            <h2 className='text-5xl text-center mt-3 mb-5'>Add Your Product</h2>
            <div className='mt-20 flex justify-center items-center'>
                <div className='w-96 p-7 border bg-green-100'>

                    <form onSubmit={handleSubmit(handelAddProducts)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" {...register("name", {
                                required: 'Name is required'
                            })} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: 'Email Address is required'
                            })} placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Chose Your Option</span>
                            </label>
                            <select {...register("role", { required: true })}
                                className="select select-bordered w-full max-w-xs"
                            >
                                <option value="buyer">buyer</option>
                                <option value="seller">seller</option>
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: "Password must be 6 characters or more longer" }
                            })} placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        </div>

                        <input className='btn btn-accent w-full mt-7' value="Sign Up" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;