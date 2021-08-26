import React from 'react';
import { products } from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CreateCatalog';

const shirt = products.find((item) => item.id === 'Shirts');

const Shirts = ({ match }) => {
    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog([shirt])}
            </div>
        </div>
    );
}; //createCatalog takes an arr

export default Shirts;