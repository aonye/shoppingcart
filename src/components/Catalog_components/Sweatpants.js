import React from 'react';
import products from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CatalogItems';

const Sweatpants = () => {
    const { sweatpants } = products;

    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog({ sweatpants })}
            </div>
        </div>
    ); //createCatalog takes an object
};

export default Sweatpants;