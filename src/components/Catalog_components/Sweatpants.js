import React from 'react';
import { Products } from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CreateCatalog';

const sweatpantsProd = [Products.find((item) => item.ProductType === 'Sweatpants')];

const Sweatpants = ({ match }) => {
    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog(sweatpantsProd)}
            </div>
        </div>
    ); //createCatalog takes an object
};

export default Sweatpants;