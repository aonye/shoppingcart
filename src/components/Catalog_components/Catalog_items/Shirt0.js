import { Products } from '../../../images/ProductImages';
const shirtProd = [Products.find((item) => item.ProductType === 'Shirts')];

const Shirt0 = () => {
    console.log('rendered');
    return (
        <img src='' alt='' />
    );
};

export default Shirt0;
