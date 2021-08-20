import { Link } from 'react-router-dom';
import Cart from '../images/icons/cart-final.jpg';

const Nav = () => {
    return (
        <nav className='navbar'>
            <Link to='/'><h3>Insert Logo</h3></Link>
            <ul className='navlinks'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/catalog'><li>Shop</li></Link>
                <Link to='/about'><li>About</li></Link>
                <img className='cart' src={Cart} alt='cart' />
            </ul>
        </nav>
    );
};

export default Nav;