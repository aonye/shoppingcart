import { Link } from 'react-router-dom';

const createMenu = () => ( //menu links must be static, cannot use match
    <ul className='catalogmenu'>
        <Link to='/catalog'><div className='catalogtitle'>Shop All</div></Link>
        <Link to='/catalog/shirts'><li>Shirts</li></Link>
        <Link to='/catalog/sweatshirts'><li>Sweatshirts</li></Link>
        <Link to='/catalog/sweatpants'><li>Sweatpants</li></Link>
        <Link to='/catalog/accessories'> <li>Accessories</li></Link>
    </ul>
);

export default createMenu;