import React from 'react';
import { Products } from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CreateCatalog';

const accessoriesProd = [Products.find((item) => item.ProductType === 'Accessories')];

const Accessories = () => {
    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog(accessoriesProd)}
            </div>
        </div>
    ); //createCatalog takes an arr
};

export default Accessories;
