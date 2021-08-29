import React from 'react';
import { Products } from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CreateCatalog';

const shirtProd = [Products.find((item) => item.ProductType === 'Shirts')];

const Shirts = ({ match }) => {
    console.log(shirtProd);
    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog(shirtProd)}
            </div>
        </div>
    );
}; //createCatalog takes an arr

export default Shirts;