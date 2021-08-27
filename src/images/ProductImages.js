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
    { id: 0, name: 'NikeMaizeShirt', image: NikeMaizeShirt },
    { id: 1, name: 'JordanLS', image: JordanLS },
];

const sweatshirts = [
    { id: 0, name: 'MaizeFBSS', image: MaizeFBSS },
    { id: 1, name: 'NavyFBSS', image: NavyFBSS },
    { id: 2, name: 'NavyPOBasic', image: NavyPOBasic },
    { id: 3, name: 'WhitePOBasic', image: WhitePOBasic },
    { id: 4, name: 'GrayPO', image: GrayPO },
    { id: 5, name: 'NikeMaizeShirt', image: NikeMaizeShirt },
];

const sweatpants = [
    { id: 0, name: 'ChampGraySP', image: ChampGraySP },
    { id: 1, name: 'ChampNavySP', image: ChampNavySP },
];

const accessories = [
    { id: 0, name: 'NavyHat', image: NavyHat },
    { id: 1, name: 'Scarf', image: Scarf },
];

const Products = [
    { ProductType: 'Shirts', ProductInfo: shirts },
    { ProductType: 'Sweatshirts', ProductInfo: sweatshirts },
    { ProductType: 'Sweatpants', ProductInfo: sweatpants },
    { ProductType: 'Accessories', ProductInfo: accessories },
]

export { Products }; //all exports are objs in arr
