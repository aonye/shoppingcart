import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/Styles.css';
import Index from './components/Index';

const Routes = () => {
    const { Nav, Catalog, App, About, Footer } = Index;
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path='/catalog' component={Catalog} />
                <Route path='/about' component={About} />
                <Route path='/' component={App} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default Routes;