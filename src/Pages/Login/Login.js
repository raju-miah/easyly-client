import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { loginUser, googleSignIn } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    // login email pass function 

    const handelLogin = data => {
        // console.log(data)

        setLoginError('');

        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('Login Success');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message);
            })
    }

    // google login function

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('SignUp Success');
                // const role = "buyer";

                saveGoogleUser(user.displayName, user.email);

                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    // save google user to database

    const saveGoogleUser = (name, email) => {
        const googleUser = { name, email };
        console.log(googleUser);

        fetch('https://easyly-server.vercel.app/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(googleUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('googleUser', data)
            })

    }



    return (
        <div className='mt-20 flex justify-center items-center'>
            <div className='w-96 p-7 border rounded-lg bg-green-100'>
                <h2 className='text-5xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handelLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: 'Email Address is required'
                        })} placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: "Password must be 6 characters or more longer" }
                        })} placeholder="Your password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>

                    <div>
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-7' value="Login" type="submit" />
                </form>
                <p className='text-center mt-2'>New to Easyly <Link to="/signup" className='text-success'>Create a new account?</Link></p>

                <div className="divider">OR</div>
                <button onClick={handelGoogleSignIn} className='btn btn-warning w-full'>
                    <FaGoogle className='mr-5 text-stone-50 text-3xl' />
                    Login WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;