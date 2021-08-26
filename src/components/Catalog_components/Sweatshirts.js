import React from 'react';
import { products } from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CreateCatalog';

const sweatshirt = products.find((item) => item.id === 'Sweatshirts');

const Sweatshirts = () => {
    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog([sweatshirt])}
            </div>
        </div>
    ); //createCatalog takes an arr
};

export default Sweatshirts;


