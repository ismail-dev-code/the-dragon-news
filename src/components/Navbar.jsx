import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto'>
            <div className=""></div>
            <div className="nav  flex gap-5 text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="nav-btn flex gap-5">
        <img src={userImg} alt="user image" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;