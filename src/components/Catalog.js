import React, { useState } from 'react';
import { shirts, sweatshirts, sweatpants, accessories } from '../images/ProductImages';

const Catalog = () => {

    const createUI = (array) => {
        return array.map((item, index) => {
            return (
                <img className='products' src={item} alt='' />
            );
        });
    };

    const makeEmptyStr = (num) => {
        let str = '';
        for (let i = 0; i < num; i++) {
            str += '\xa0';
        }
        console.log(str);
        return str;
    }

    return (
        <div className='catalog'>
            <ul className='catalogmenu'>
                <li>Shop All</li>
                <li>T-shirts</li>
                <li>Sweatshirts</li>
            </ul>
            <div className='shopContainer'>
                <div className='shirts'>
                    <div className='labels'>
                        <label>Shirts</label>
                        <label className='underline'>{makeEmptyStr(50)}</label>
                    </div>
                    <div className='shirtgrid'>
                        {createUI(shirts)}
                    </div>
                </div>
                <div className='shirts'>
                    <div className='labels'>
                        <label>Sweatshirts</label>
                        <label className='underline'>{makeEmptyStr(50)}</label>
                    </div>
                    <div className='shirtgrid'>
                        {createUI(sweatshirts)}
                    </div>
                </div>
                <div className='shirts'>
                    <div className='labels'>
                        <label>Sweatpants</label>
                        <label className='underline'>{makeEmptyStr(50)}</label>
                    </div>
                    <div className='shirtgrid'>
                        {createUI(sweatpants)}
                    </div>
                </div>
                <div className='shirts'>
                    <div className='labels'>
                        <label>Accessories</label>
                        <label className='underline'>{makeEmptyStr(50)}</label>
                    </div>
                    <div className='shirtgrid'>
                        {createUI(accessories)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
