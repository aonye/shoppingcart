import { makeEmptyStr } from '../HelperFunctions';
import { Link } from 'react-router-dom';

const createCatalog = (arr) => {
    return arr.map((item, index) => {
        const prodType = item.ProductType;
        const prodImgs = item.ProductInfo;
        return (
            <div key={index} className='product'>
                <div className='labels'>
                    <label>{prodType}</label>
                    <label className='underline'>{makeEmptyStr(50)}</label>
                </div>
                <div className='imageContainer'>
                    {createImages(prodType.toLowerCase(), prodImgs)}
                </div>
            </div >
        );
    });
};

const createImages = (prodType, array) => {
    return array.map((item) => {
        return (
            <Link key={item.id} to={`/catalog/${prodType}/${item.id}`}>
                <img className='images' src={item.image} alt='' />
            </Link>
        );
    });
};

export default createCatalog;

