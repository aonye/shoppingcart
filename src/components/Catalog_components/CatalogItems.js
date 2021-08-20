import { makeEmptyStr, capitalize } from '../HelperFunctions';

const createCatalog = (Obj) => {
    let catalog = [];
    for (let key in Obj) {
        const capKey = capitalize(key);
        const arr = [...Obj[key]];
        catalog.push(
            <div className='product'>
                <div className='labels'>
                    <label>{capKey}</label>
                    <label className='underline'>{makeEmptyStr(50)}</label>
                </div>
                <div className='imageContainer'>
                    {createImages(arr)}
                </div>
            </div >
        );
    }
    return catalog.map((item, index) => {
        return item;
    });
}

const createImages = (array) => {
    return array.map((item, index) => {
        return (
            <img className='images' src={item} alt='' />
        );
    });
};

export default createCatalog;

