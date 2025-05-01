import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { authContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user} = use(authContext);

    return (
        <div className='flex justify-between items-center w-11/12 mx-auto'>
            <div className="">{user && user.email}</div>
            <div className="nav  flex gap-5 text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="nav-btn flex gap-5">
        <img src={userImg} alt="user image" />
                <Link to={'/auth/login'} className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;