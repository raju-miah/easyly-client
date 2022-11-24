import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();


    const handelLogin = data => {
        console.log(data)
    }


    return (
        <div className='mt-20 flex justify-center items-center'>
            <div className='w-96 p-7 border'>
                <h2 className='text-5xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handelLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" {...register("email")} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-accent w-full mt-7' value="Login" type="submit" />
                </form>
                <p>New to Easyly <Link to="/signup" className='text-success'>Create a new account?</Link></p>

                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;