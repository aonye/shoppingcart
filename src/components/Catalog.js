import React from 'react';
import { Link } from 'react-router-dom';
import { Products } from '../images/ProductImages';
import createCatalog from './Catalog_components/CreateCatalog';
import Index from './Index';
import Shirts from './Catalog_components/Shirts';

const Catalog = ({ match }) => {
    return (
        <div className='catalog'>
            <ul className='catalogmenu'>
                <Link className='catalogtitle' to={`${match.path}`}><div>Shop All</div></Link>
                <Link to={`${match.path}shirts`}> <li>Shirts</li></Link>
                <Link to={`${match.path}sweatshirts`}><li>Sweatshirts</li></Link>
                <Link to={`${match.path}sweatpants`}><li>Sweatpants</li></Link>
                <Link to={`${match.path}accessories`}> <li>Accessories</li></Link>
            </ul>
            <div className='shopContainer'>
                {createCatalog(Products)}
            </div>
        </div>
    );
};

export default Catalog;

// const ProductPage = [
//     { id: 'Shirts', Shirts },
//     { id: 'Sweatshirts', Sweatshirts },
//     { id: 'Sweatpants', Sweatpants },
//     { id: 'Accessories', Accessories },
//     { id: '', Products },
// ];
// let path = ProductPage.find((item) => {
//     return `/catalog/${item.id.toLowerCase()}` === match.url;
// });
// if (!path) {
//     path = Products;
// }
// console.log(path);

// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <Link to={`${match.url}/exampleTopicId`}>
//             Example topic
//         </Link>
//         <Route path={`${match.path}/:topicId`} component={Topic} />
//     </div>
// )


//{createCatalog(products)}

/* <div className='catalog'>
    {createMenu()}
    <div className='shopContainer'>
        {createCatalog(products)}
    </div>
</div> */

//Menu: 
/* <ul className='catalogmenu'>
    <Link className='catalogtitle' to='/catalog'><div>Shop All</div></Link>
    <Link to='catalog/shirts'><li>Shirts</li></Link>
    <Link to='catalog/sweatshirts'><li>Sweatshirts</li></Link>
    <Link to='catalog/sweatpants'><li>Sweatpants</li></Link>
    <Link to='catalog/accessories'> <li>Accessories</li></Link>
</ul> */

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

