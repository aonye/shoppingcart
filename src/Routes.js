import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/Styles.css';
import Index from './components/Index';

const Routes = () => {
    const {
        Nav,
        Catalog,
        App,
        About,
        Footer,
        Shirts,
        Sweatshirts,
        Sweatpants,
        Accessories,
    } = Index;

    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path='/catalog' component={Catalog} />
                <Route path='/shirts' component={Shirts} />
                <Route path='/sweatshirts' component={Sweatshirts} />
                <Route path='/sweatpants' component={Sweatpants} />
                <Route path='/accessories' component={Accessories} />
                <Route path='/about' component={About} />
                <Route path='/' component={App} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default Routes;