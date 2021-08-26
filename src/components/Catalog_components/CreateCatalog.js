import { makeEmptyStr, capitalize } from '../HelperFunctions';
import { Link } from 'react-router-dom';

const createCatalog = (arr) => {
    return arr.map((item, index) => {
        const itemType = item.id;
        const imgArr = item.imgArr;
        return (
            <div key={index} className='product'>
                <div className='labels'>
                    <label>{itemType}</label>
                    <label className='underline'>{makeEmptyStr(50)}</label>
                </div>
                <div className='imageContainer'>
                    {createImages(itemType, imgArr)}
                </div>
            </div >
        );
    });
};

const createImages = (itemType, array) => {
    console.log(itemType);
    const LCItemType = itemType.toLowerCase();
    return array.map((item, index) => {
        return (
            <Link key={index} to={`/catalog/${LCItemType}/${index}`}>
                <img className='images' src={item.image} alt='' />
            </Link>
        );
    });
};

export default createCatalog;

