import React, { useState } from 'react';
import { IoMdBowtie, IoMdMenu } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const links = [
        { name: 'HOME', link: '/' },
        { name: 'PRODUCTS', link: '/products' },
        { name: 'ABOUT', link: '/about' }
    ];
    return (
        <div className="pb-20">
            <nav
                className="flex fixed w-full justify-between items-center px-4 z-20 py-4 bg-white shadow-lg
               sm:py-0">
                <div>
                    <IoMdBowtie className="text-3xl" />
                </div>
                <ul
                    className={`absolute bg-white shadow-lg left-0 w-full p-5 duration-500 
                sm:flex sm:flex-row sm:justify-end sm:items-center sm:p-0 sm:static sm:shadow-none 
                ${toggle ? 'top-16' : 'top-[-350px]'}  `}>
                    {links.map((link) => {
                        return (
                            <li key={link.name} className="py-3 sm:py-0 sm:px-3">
                                <NavLink className="hover:border-b-2 border-black" to={link.link}>
                                    {link.name}
                                </NavLink>
                            </li>
                        );
                    })}
                    <button className=" text-xs p-2 my-3 rounded-lg outline ">CONTACT</button>
                </ul>
                <div>
                    <IoMdMenu onClick={() => setToggle(!toggle)} className="text-3xl  sm:invisible" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
