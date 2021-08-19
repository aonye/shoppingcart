import React from 'react';
import products from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CatalogItems';

const Sweatshirts = () => {
    const { sweatshirts } = products;

    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog({ sweatshirts })}
            </div>
        </div>
    ); //createCatalog takes an object
};

export default Sweatshirts;