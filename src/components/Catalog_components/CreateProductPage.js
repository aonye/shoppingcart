import { Route } from 'react-router-dom';
import createMenu from './CatalogMenu';

const createRoute = (productIndex, path, clickHand) => {
    //console.log(productIndex, path, clickHand);
    const regex = '(?<=\/catalog\/)[A-Za-z]+';
    const [routeName] = path.match(regex);
    // const product = productIndex.find((item) => {
    //     return item.ProductType === capitalize(routeName);
    // });
    return productIndex.map((elem) => {
        return (
            <Route key={elem.id} path={`${path}/${elem.id}`} render={() => createComponent(elem, routeName, clickHand)} exact />
        );
    });
}

const createComponent = (elem, routeName, clickHand) => {
    return (
        <div className='catalog'>
            {createMenu()}
            <div className='productPageContainer' id={`${routeName + elem.id}`}>
                <img src={elem.image} alt='' />
                <div>{`${elem.description}`}</div>
                <div>{`Unit Price: ${elem.price}`}</div>
                <button onClick={(e) => clickHand(e, elem)}>Add to Cart</button>
            </div>
        </div>
    );
}

export default createRoute;