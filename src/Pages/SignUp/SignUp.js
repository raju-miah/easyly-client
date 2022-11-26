import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signUpUser, updateUserInfo, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();


    const handelSignUp = data => {
        console.log(data)

        setSignUpError('');

        signUpUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('SignUp Success');

                const userInfo = {
                    displayName: data.name
                }

                updateUserInfo(userInfo)
                    .then(() => {
                        saveAllUserInfo(data.name, data.email, data.role);
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            })
    }

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


    const saveAllUserInfo = (name, email, role) => {
        const allUser = { name, email, role };

        console.log(allUser)

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('alluser', data)
            })
    }


    const saveGoogleUser = (name, email) => {
        const googleUser = { name, email };
        console.log(googleUser);

        fetch('http://localhost:5000/users', {
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
                <h2 className='text-5xl text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handelSignUp)}>

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
                    <div>
                        {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-7' value="Sign Up" type="submit" />
                </form>
                <p className='text-center mt-2'>Already have a account? <Link to="/login" className='text-success'>Please login</Link></p>

                <div className="divider">OR</div>
                <button onClick={handelGoogleSignIn} className='btn btn-warning w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;