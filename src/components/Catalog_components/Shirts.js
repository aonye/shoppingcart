import React from 'react';
import products from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CatalogItems';

const Shirts = () => {
    const { shirts } = products;

    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog({ shirts })}
            </div>
        </div>
    ); //createCatalog takes an object
};

export default Shirts;