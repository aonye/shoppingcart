import { Link } from 'react-router-dom';

const createMenu = () => {
    return (
        <ul className='catalogmenu'>
            <Link className='catalogtitle' to='/catalog'><div>Shop All</div></Link>
            <Link to='/shirts'><li>Shirts</li></Link>
            <Link to='/sweatshirts'><li>Sweatshirts</li></Link>
            <Link to='/sweatpants'><li>Sweatpants</li></Link>
            <Link to='/accessories'> <li>Accessories</li></Link>
        </ul>
    );
};

export default createMenu;