import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { loginUser } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();


    const handelLogin = data => {
        console.log(data)

        setLoginError('');

        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate('/');
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message);
            })
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
                        <input type="text" {...register("email", {
                            required: 'Email Address is required'
                        })} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: "Password must be 6 characters or more longer" }
                        })} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>

                    <div>
                        {loginError && <p className='text-red-500'>{loginError}</p>}
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