import { Link } from 'react-router-dom';

const createMenu = () => ( //menu links must be static, cannot use match
    <ul className='catalogmenu'>
        <Link to='/shoppingcart/catalog'><div className='catalogtitle'>Shop All</div></Link>
        <Link to='/shoppingcart/catalog/shirts'><li>Shirts</li></Link>
        <Link to='/shoppingcart/catalog/sweatshirts'><li>Sweatshirts</li></Link>
        <Link to='/shoppingcart/catalog/sweatpants'><li>Sweatpants</li></Link>
        <Link to='/shoppingcart/catalog/accessories'> <li>Accessories</li></Link>
    </ul>
);

export default createMenu;