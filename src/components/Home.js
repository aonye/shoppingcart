import stadium from '../images/background/michigan_stadium.jpg';
import { BrowserRouter as Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id='homepage'>
            <div id='hometitle'>Welcome to MLodge Apparel! GO BLUE!</div>
            <Link to='/catalog'><img id='stadium' src={stadium} alt='michstad' width='900' height='600' /></Link>
        </div>
    );
}

export default Home;

