import ChampGraySP from './products/champion-gray-sweatpants.jpeg';
import ChampNavySP from './products/champion-navy-sweatpants.jpeg';
import GrayPO from './products/gray-pullover.jpeg';
import JordanLS from './products/jordan-bball-longsleeve.jpeg';
import MaizeFBSS from './products/maize-football-sweatshirt.jpeg';
import NavyHat from './products/navy-flex-hat.jpeg';
import Scarf from './products/scarf.jpeg';
import NavyFBSS from './products/navy-football-sweatshirt.jpeg';
import NavyPOBasic from './products/navy-pullover-basic.jpeg';
import NikeMaizeShirt from './products/nike-maize-shirt.jpeg';
import WhitePOBasic from './products/white-pullover-basic.jpeg';

const shirts = [
    { id: 'NikeMaizeShirt', image: NikeMaizeShirt },
    { id: 'JordanLS', image: JordanLS },
];

const sweatshirts = [
    { id: 'MaizeFBSS', image: MaizeFBSS },
    { id: 'NavyFBSS', image: NavyFBSS },
    { id: 'NavyPOBasic', image: NavyPOBasic },
    { id: 'WhitePOBasic', image: WhitePOBasic },
    { id: 'GrayPO', image: GrayPO },
    { id: 'NikeMaizeShirt', image: NikeMaizeShirt },
];

const sweatpants = [
    { id: 'ChampGraySP', image: ChampGraySP },
    { id: 'ChampNavySP', image: ChampNavySP },
];

const accessories = [
    { id: 'NavyHat', image: NavyHat },
    { id: 'Scarf', image: Scarf },
];

const products = [
    { id: 'Shirts', imgArr: shirts },
    { id: 'Sweatshirts', imgArr: sweatshirts },
    { id: 'Sweatpants', imgArr: sweatpants },
    { id: 'Accessories', imgArr: accessories },
];

export { products, shirts, sweatshirts, sweatpants, accessories };
