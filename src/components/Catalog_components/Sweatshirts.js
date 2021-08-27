import React from 'react';
import { Products } from '../../images/ProductImages';
import createMenu from './CatalogMenu';
import createCatalog from './CreateCatalog';

const sweatshirtProd = [Products.find((item) => item.ProductType === 'Sweatshirts')];

const Sweatshirts = ({ match }) => {
    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog(sweatshirtProd)}
            </div>
        </div>
    ); //createCatalog takes an arr
};

export default Sweatshirts;


