import React from 'react';
import products from '../images/ProductImages';
import createMenu from './Catalog_components/CatalogMenu';
import createCatalog from './Catalog_components/CatalogItems';

const Catalog = () => {
    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog(products)}
            </div>
        </div>
    );
};

export default Catalog;

//  <div className='product'>
//                     <div className='labels'>
//                         <label>Shirts</label>
//                         <label className='underline'>{makeEmptyStr(50)}</label>
//                     </div>
//                     <div className='prodImgs'>
//                         {createUI(shirts)}
//                     </div>
//                 </div>
//                 <div className='product'>
//                     <div className='labels'>
//                         <label>Sweatshirts</label>
//                         <label className='underline'>{makeEmptyStr(50)}</label>
//                     </div>
//                     <div className='prodImgs'>
//                         {createUI(sweatshirts)}
//                     </div>
//                 </div>
//                 <div className='product'>
//                     <div className='labels'>
//                         <label>Sweatpants</label>
//                         <label className='underline'>{makeEmptyStr(50)}</label>
//                     </div>
//                     <div className='prodImgs'>
//                         {createUI(sweatpants)}
//                     </div>
//                 </div>
//                 <div className='product'>
//                     <div className='labels'>
//                         <label>Accessories</label>
//                         <label className='underline'>{makeEmptyStr(50)}</label>
//                     </div>
//                     <div className='prodImgs'>
//                         {createUI(accessories)}
//                     </div>
//                 </div>

