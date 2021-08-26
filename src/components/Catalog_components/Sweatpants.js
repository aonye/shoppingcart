import React from 'react';
import { products } from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CreateCatalog';

const sweatpant = products.find((item) => item.id === 'Sweatpants');

const Sweatpants = ({ match }) => {
    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog([sweatpant])}
            </div>
        </div>
    ); //createCatalog takes an object
};

export default Sweatpants;