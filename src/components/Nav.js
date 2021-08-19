import { Link } from 'react-router-dom';
import Cart from '../images/icons/shopping-cart-icon.png';
import Cart3 from '../images/icons/cart-3.jpg';

const Nav = () => {
    return (
        <nav className='navbar'>
            <Link to='/'><h3>Insert Logo</h3></Link>
            <ul className='navlinks'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/catalog'><li>Shop</li></Link>
                <Link to='/about'><li>About</li></Link>
                <img className='x' src={Cart3} alt='Shopping Cart' width='25' height='25' />
            </ul>
        </nav>
    );
};

export default Nav;