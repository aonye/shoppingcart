import { Link } from 'react-router-dom';
import { MichiganLogo } from '../images/Icons';
import Cart from '../images/icons/cart-final.jpg';

const Nav = (props) => {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <div className='logoContainer'>
                    <img className='logoImg' src={MichiganLogo} alt='Michigan Logo' />
                    <div>Lodge</div>
                </div>
            </Link>
            <ul className='navlinks'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/catalog'><li>Shop</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/shoppingcart'>
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