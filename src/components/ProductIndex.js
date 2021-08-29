import { Shirts, Sweatshirts, Sweatpants, Accessories } from '../images/ProductImages';
import { arrObjCombiner } from './HelperFunctions';

const ShirtInfo = [
    { id: 0, name: 'NikeMaizeShirt', description: 'Nike embroidered shirt in iconic maize color', price: 14.99 },
    { id: 1, name: 'JordanLS', description: 'Jordan brand, long sleeve shirt in white.', price: 19.99 },
];

const SSInfo = [
    { id: 0, name: 'MaizeFBSS', description: 'Michigan football sweatshirt with hood in maize color', price: 34.99 },
    { id: 1, name: 'NavyFBSS', description: 'Michigan football sweatshirt with hood in navy color', price: 35.99 },
    { id: 2, name: 'NavyPOBasic', description: 'Basic pullover sweatshirt in navy color', price: 29.99 },
    { id: 3, name: 'WhitePOBasic', description: 'Basic pullover sweatshirt in white color', price: 29.98 },
    { id: 4, name: 'GrayPO', description: 'Basic pullover sweatshirt in white color', price: 24.99 },
];

const SPInfo = [
    { id: 0, name: 'ChampGraySP', description: 'Champion embroidered, basic gray sweatpants', price: 29.97 },
    { id: 1, name: 'ChampNavySP', description: 'Champion embroidered, basic navy sweatpants', price: 29.96 },
];

const AccessInfo = [
    { id: 0, name: 'NavyHat', description: 'Navy hat with Michigan Logo', price: 19.98 },
    { id: 1, name: 'Scarf', description: 'Wool hand-knit navy and maize scarf', price: 14.99 },
];

const ShirtIndex = arrObjCombiner(Shirts, ShirtInfo);
const SSIndex = arrObjCombiner(Sweatshirts, SSInfo);
const SPIndex = arrObjCombiner(Sweatpants, SPInfo);
const AccessIndex = arrObjCombiner(Accessories, AccessInfo);

export { ShirtIndex, SSIndex, SPIndex, AccessIndex };