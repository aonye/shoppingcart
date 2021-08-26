import React from 'react';
import { products } from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CreateCatalog';

const accessory = products.find((item) => item.id === 'Accessories');

const Accessories = () => {
    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog([accessory])}
            </div>
        </div>
    ); //createCatalog takes an arr
};

export default Accessories;
