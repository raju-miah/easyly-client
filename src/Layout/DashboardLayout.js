import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Footer from '../Pages/Shared/Footer/Footer';
import LoadingSpinner from '../Pages/Shared/LoadingSpinner/LoadingSpinner';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const { user, loading } = useContext(AuthContext);


    const [isAdmin] = useAdmin(user?.email);

    const [isBuyer] = useBuyer(user?.email);

    const [isSeller] = useSeller(user?.email);


    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    // console.log(isAdmin);
    // console.log(user.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-3xl font-bold">Dashboard Navbar</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}

                                {
                                    isBuyer && <>

                                        <li><Link to="/dashboard/myorder">
                                            <button className='btn btn-success'>My Orders</button>
                                        </Link></li>

                                    </>
                                }

                                {
                                    isAdmin && <>
                                        <li><Link to="/dashboard/allseller">
                                            <button className='btn btn-success'>All Seller</button>
                                        </Link></li>

                                        <li><Link to="/dashboard/allbuyer">
                                            <button className='btn btn-success'>All Buyer</button>
                                        </Link></li>

                                        <li><Link to="/dashboard/reported">
                                            <button className='btn btn-success'>
                                                Reported Product</button>
                                        </Link></li>
                                    </>
                                }

                                {
                                    isSeller && <>

                                        <li><Link to="/dashboard/addproduct">
                                            <button className='btn btn-success'>Add Product</button>
                                        </Link></li>

                                        <li><Link to="/dashboard/myproduct">
                                            <button className='btn btn-success'>My Product</button>
                                        </Link></li>

                                    </>
                                }

                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}

                        {
                            isBuyer && <>

                                <li><Link to="/dashboard/myorder">
                                    <button className='btn btn-success'>My Orders</button>
                                </Link></li>

                            </>
                        }

                        {
                            isAdmin && <>

                                <li><Link to="/dashboard/allseller">
                                    <button className='btn btn-success'>All Seller</button>
                                </Link></li>


                                <li><Link to="/dashboard/allbuyer">
                                    <button className='btn btn-success'>All Buyer</button>
                                </Link></li>

                                <li><Link to="/dashboard/reported">
                                    <button className='btn btn-success'>
                                        Reported Product</button>
                                </Link></li>

                            </>
                        }

                        {
                            isSeller && <>

                                <li><Link to="/dashboard/addproduct">
                                    <button className='btn btn-success'>Add Product</button>
                                </Link></li>

                                <li><Link to="/dashboard/myproduct">
                                    <button className='btn btn-success'>My Product</button>
                                </Link></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;