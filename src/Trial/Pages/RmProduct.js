// RmProduct.js

import React, { useState } from 'react';
import products from './Products'; // Import the product data
import Product from './Product';

const RmProduct = () => {
    const [productList, setProductList] = useState(products);

    const handleRemove = (productToRemove) => {
        const updatedList = productList.filter((product) => product.id !== productToRemove.id);
        setProductList(updatedList);
    };

    return (
        <div>
            {productList.map((product) => (
                <Product key={product.id} product={product} onRemove={handleRemove} />
            ))}
        </div>
    );
};

export default RmProduct;
