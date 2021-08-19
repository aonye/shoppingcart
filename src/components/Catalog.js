import Products from '../images/ProductImages';
import React, { useState } from 'react';

const Catalog = () => {
    const [ChampGraySP, ChampNavySP, GrayPO, JordanLS, MaizeFBSS, NavyHat, NavyFBSS, NavyPOBasic, NikeMaizeShirt, WhitePOBasic] = Products;
    console.log(ChampGraySP, ChampNavySP, GrayPO, JordanLS, MaizeFBSS, NavyHat, NavyFBSS, NavyPOBasic, NikeMaizeShirt, WhitePOBasic);

    const createUI = (array) => {
        return array.map((item, index) => {
            return (
                <img className='products' src={item} alt='' />
            );
        });
    };

    return (
        <div className='catalog'>
            <ul className='catalogmenu'>
                <li>Shop All</li>
                <li>T-shirts</li>
                <li>Sweatshirts</li>
            </ul>
            <div className='shopContainer'>
                <div>Shirts</div>
                <div className='shirts'>
                    {createUI(Products)}
                </div>
                <div>Sweatshirts</div>
                <div className='sweatshirts'>
                    {createUI(Products)}
                </div>
                <div>Sweatpants</div>
                <div className='sweatpants'>
                    {createUI(Products)}
                </div>
                <div>Accessories</div>
                <div className='accessories'>
                    {createUI(Products)}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
