import React from 'react';
import products from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CreateCatalog';

const Products = () => {
    const { shirts } = products;
    console.log(shirts);
    return (
        <div>{createCatalog(products)}</div>
    ); //createCatalog takes an object
};

{/* <div className='catalog'>
    {createMenu()}
    <div className='shopContainer'>
        {createCatalog({ shirts })}
    </div>
</div> */}

export default Products;