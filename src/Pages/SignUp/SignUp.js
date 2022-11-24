import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signUpUser, updateUserInfo } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');


    const handelSignUp = data => {
        console.log(data)

        setSignUpError('');

        signUpUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)

                const userInfo = {
                    displayName: data.name
                }

                updateUserInfo(userInfo)
                    .then(() => { })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            })
    }



    return (
        <div className='mt-20 flex justify-center items-center'>
            <div className='w-96 p-7 border'>
                <h2 className='text-5xl text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handelSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: 'Name Address is required'
                        })} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" {...register("email", {
                            required: 'Email Address is required'
                        })} placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Chose Your Option</span>
                        </label>
                        <select {...register("category", { required: true })}
                            className="select select-bordered w-full max-w-xs"
                        >
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
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
                    <div>
                        {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-7' value="Sign Up" type="submit" />
                </form>
                <p>Already have a account? <Link to="/login" className='text-success'>Please login</Link></p>

                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;