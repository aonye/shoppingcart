import { Link } from 'react-router-dom';
import { MichiganLogo } from '../images/Icons';
import Cart from '../images/icons/cart-final.jpg';

const Nav = (props) => {
    return (
        <nav className='navbar'>
            <Link to='/shoppingcart'>
                <div className='logoContainer'>
                    <img className='logoImg' src={MichiganLogo} alt='Michigan Logo' />
                    <div>Lodge</div>
                </div>
            </Link>
            <ul className='navlinks'>
                <Link to='/shoppingcart'><li>Home</li></Link>
                <Link to='/shoppingcart/catalog'><li>Shop</li></Link>
                <Link to='/shoppingcart/about'><li>About</li></Link>
                <Link to='/shoppingcart/cart'>
                    <li className='cart'>
                        <img className='cartimg' src={Cart} alt='cart' />
                        {checkState(props.cart) ? <div className='reddot'></div> : null}
                    </li>
                </Link>
            </ul>
        </nav >
    );
};

const checkState = (obj) => { //object of arrays
    for (let key in obj) {
        if (obj[key].length !== 0) { //if any arr not empty
            return true;
        }
    }
    return false;
}

export default Nav;