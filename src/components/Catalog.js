import React from 'react';
import Products from '../images/ProductImages';
import createMenu from './Catalog_components/CatalogMenu';
import { makeEmptyStr, capitalize } from './HelperFunctions';

const Catalog = () => {
    const createImages = (array) => {
        return array.map((item, index) => {
            return (
                <img className='images' src={item} alt='' />
            );
        });
    };

    const createCatalog = () => {
        let catalog = [];
        for (let key in Products) {
            const capKey = capitalize(key);
            const arr = [...Products[key]];
            catalog.push(
                <div className='product'>
                    <div className='labels'>
                        <label>{capKey}</label>
                        <label className='underline'>{makeEmptyStr(50)}</label>
                    </div>
                    <div>
                        {createImages(arr)}
                    </div>
                </div>
            );
        }
        return catalog.map((item, index) => {
            return item;
        });
    }

    return (
        <div className='catalog'>
            {createMenu()}
            <div className='shopContainer'>
                {createCatalog()}
            </div>
        </div>
    );
};

export { createMenu };

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

export default Catalog;
