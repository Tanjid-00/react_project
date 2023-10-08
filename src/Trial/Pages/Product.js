import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IoMdStar } from 'react-icons/io';

const Product = () => {
    const { title } = useParams();
    const location = useLocation();
    return (
        <div className="mx-4 mb-20">
            <h1 className="text-3xl font-bold w-fit m-auto">Product</h1>

            <div className=" my-10 flex w-3/4 m-auto items-center justify-around">
                <div className="text-xl leading-loose font-semibold sm:text-2xl">
                    <h1>{title}</h1>
                    <h2>Price:{location.state.price}$</h2>
                    <h2 className="flex items-center justify-center">
                        Rating:{location.state.rating}
                        <IoMdStar className="text-yellow-500" />{' '}
                    </h2>
                </div>
                <div className="h-52 w-44 sm:h-72 sm:w-56 lg:h-80 lg:w-64  rounded-md bg-slate-400 text-center">{location.state.img}</div>
            </div>

            <p className="w-3/4 m-auto text-justify">
                <span className="font-bold">DESCRIPTION :</span> {location.state.desc}
            </p>
            <div className="w-3/4 m-auto mt-10">
                <button className="border bg-emerald-400 border-black rounded-lg  px-2 py-1 ">order now</button>
            </div>
        </div>
    );
};

export default Product;
