import { products } from '../../../images/ProductImages';

const itemType = products.find(item => item.id === 'Shirts');
const product = itemType.imgArr.find(item => item.id === 'NikeMaizeShirt');

const Shirt1 = () => {
    console.log('rendered', itemType, product);
    return (
        <img src={product.image} alt='' />
    );
};

export default Shirt1;
