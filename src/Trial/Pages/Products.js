import React, { useState } from 'react';
import Data from '../data.json';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';

const Products = ({ onRemove }) => {
    const [products] = useState(Data);
    const slicedText = (str, num) => {
        if (str.length > 100) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold w-fit m-auto">Products</h1>

            <div className="text-center   my-7 w-96 m-auto relative  sm:w-3/5 ">
                <input
                    type="text"
                    name="search"
                    placeholder="search items"
                    className="border border-black rounded-full 
                    px-3 w-full py-2  outline-emerald-500 "
                />
                <div className="absolute top-[4px] right-[5px] p-[5px] rounded-full bg-emerald-500  ">
                    <IoMdSearch className="text-2xl opacity-60" />
                </div>
            </div>

            <div className="m-2 text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => {
                    const { title, img, desc, price, rating } = product;
                    return (
                        <div key={uuidv4()} className="shadow-slate-500 bg-slate-100 rounded-lg shadow-sm border-black p-3 gap-2 m-3 flex flex-col">
                            <h1 className="font-bold text-xl">{title}</h1>
                            <div className="h-32 w-32 m-auto rounded-md bg-slate-400">{img}</div>
                            <p>{slicedText(desc, 50)}</p>
                            <div className="flex justify-between">
                                <h2>Price: {price} $</h2>
                                <h2>Rating: {rating}</h2>
                            </div>
                            <div className="flex justify-between gap-2">
                                <button className="border bg-emerald-400 border-black rounded-lg text-white px-2 py-1 text-xs  ">
                                    <Link to={title} state={{ title, img, desc, price, rating }}>
                                        see more
                                    </Link>
                                </button>
                                <button onClick={(id) => onRemove(id)} className="border bg-red-400 border-black rounded-lg text-white px-2 py-1 text-xs  ">
                                    Remove
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
