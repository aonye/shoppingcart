import React, { useState } from 'react';
import _ from 'lodash';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { removeFromArr, updateArrContent, getNthParent } from './HelperFunctions';
import createRoute from './Catalog_components/CreateProductPage';
import { ShirtIndex, SSIndex, SPIndex, AccessIndex } from './ProductIndex';
import { default as Components } from './Index';
import '../styles/Styles.css';

const App = () => {
  const { Nav, Footer, Home, About, Catalog, Shirts, Sweatshirts, Sweatpants, Accessories, ShoppingCart } = Components;

  const [cart, setCart] = useState({
    shirts: [],
    sweatshirts: [],
    sweatpants: [],
    accessories: [],
  });

  const cartClickHand = (event, obj) => {
    const [key, id] = event.target.parentNode.id.split(/([0-9]+)/);
    const currentCart = _.cloneDeep(cart); //deep clone the state object
    const prodArr = currentCart[key]; //get product type's array of products
    const prodObj = prodArr.find((item) => { //find the specific product based on ID, return product's object
      return item.id === parseInt(id);
    });
    if (!prodObj) { //if product is not in cart, add it by cloning default obj and init count
      setCart({ ...cart, [key]: [...prodArr, { ...obj, count: 1 }] });
    } else {
      prodObj.count = prodObj.count + 1; //add another item
      //console.log('madeitinhere', cart);
      setCart({ ...currentCart });
    }
  };

  const delItemClickHand = (event) => {
    const fullID = event.target.parentNode.id.split(/([0-9]+)/);
    const [key, childIDNum] = fullID;
    const currentCart = _.cloneDeep(cart);
    const prodArr = currentCart[key];
    removeFromArr(prodArr, parseInt(childIDNum));
    setCart({ ...cart, [key]: prodArr });
  }

  const editItemClickHand = (event) => {
    const inputCount = event.target.textContent;
    console.log('made it -- edit item');
    //eslint-disable-next-line
    if (inputCount == parseInt(inputCount)) { //int check
      console.log('passed num equality check');
      const parentDiv = getNthParent(event.target, 2);
      const [key, childIDNum] = parentDiv.id.split(/([0-9]+)/);
      const currentCart = _.cloneDeep(cart);
      const prodArr = updateArrContent(currentCart[key], parseInt(childIDNum), parseInt(inputCount));
      setCart({ ...cart, [key]: prodArr });
    } else {
      console.log('hello');
    }
  };

  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Switch>
        <Route exact path='/shoppingcart' component={Home} />
        <Route exact path='/shoppingcart/about' component={About} />
        <Route exact path='/shoppingcart/cart'
          render={() => <ShoppingCart cart={cart} delItem={delItemClickHand} editItem={editItemClickHand} />} />
        <Route
          path='/shoppingcart/catalog'
          render={({ match: { path } }) => (
            <>
              <Route path={`${path}/`} component={Catalog} exact />
              <Route
                path={`${path}/shirts`}
                render={({ match: { path } }) => (
                  <>
                    <Route path={`${path}/`} component={Shirts} exact />
                    {createRoute(ShirtIndex, path, cartClickHand)}
                  </>
                )}
              />
              <Route
                path={`${path}/sweatshirts`}
                render={({ match: { path } }) => (
                  <>
                    <Route path={`${path}/`} component={Sweatshirts} exact />
                    {createRoute(SSIndex, path, cartClickHand)}
                  </>
                )}
              />
              <Route
                path={`${path}/sweatpants`}
                render={({ match: { path } }) => (
                  <>
                    <Route path={`${path}/`} component={Sweatpants} exact />
                    {createRoute(SPIndex, path, cartClickHand)}
                  </>
                )}
              />
              <Route
                path={`${path}/accessories`}
                render={({ match: { path } }) => (
                  <>
                    <Route path={`${path}/`} component={Accessories} exact />
                    {createRoute(AccessIndex, path, cartClickHand)}
                  </>
                )}
              />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};


export default App;
// import { Switch, Route } from 'react-router-dom';
// import './styles/Styles.css';
// import Index from './components/Index';

// const NotFound = () => <h1>Not Found</h1>;

// const Layouts = () => {
//   const {
//     App,
//     About,
//     Catalog,
//     Shirts,
//     Sweatshirts,
//     Sweatpants,
//     Accessories,
//   } = Index;
//   return (
//     <Switch>
//       <Route exact path='/' component={App} />
//       <Route exact path='/about' component={About} />
//       <Route exact path='/catalog' component={Catalog} />
//     </Switch>
//   );
// }

// export default Layouts;


//old image slider code written in pure JS

// <div class="container">
//   <img className='homeimg1' id="active" src="https://www.rei.com/dam/van_dragt_031219_1_1363_how_to_snowboard_hero_lg.jpg" alt='' />
//   <img className='homeimg2' src="https://www.rei.com/dam/content_team_082817_18617_training_for_snowboarding.jpg" alt='' />
//   <img className='homeimg3' src="https://www.rei.com/dam/kingman_120319_0260_snowboard_tricks_hero_lg.jpg" alt='' />
// </div>
// <div style={{ textAlign: 'center' }}>
//   <span id="0" class="dot filled"></span>
//   <span id="1" class="dot"></span>
//   <span id="2" class="dot"></span>
// </div>

//  const images = document.querySelectorAll('img'); //nnodelist of all images
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');
// const dots = document.querySelectorAll('.dot');


  // prev.addEventListener('click', prevEventHand);
  // next.addEventListener('click', nextEventHand);
  // dots.forEach((elem) => elem.addEventListener('click', dotClickHand));

  // function nextEventHand(event) {
  //   let activeImg = removeCurrentImg(images);
  //   removeDotColor(activeImg);
  //   let nextImgIndex = setImg(activeImg, event.target.className);
  //   setDotColor(nextImgIndex);
  // }

  // function prevEventHand(event) {
  //   let activeImg = removeCurrentImg(images);
  //   removeDotColor(activeImg);
  //   let prevImgIndex = setImg(activeImg, event.target.className);
  //   setDotColor(prevImgIndex);
  // }

  // function removeCurrentImg(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].classList.contains('active')) {
  //       arr[i].classList.remove('active');
  //       return i;
  //     }
  //   }
  // }

  // function setImg(currentIndex, event = '') {
  //   let indexToUpdate;
  //   switch (event) {
  //     case 'next': {
  //       indexToUpdate = currentIndex + 1;
  //       if (indexToUpdate === images.length) {
  //         indexToUpdate = 0;
  //       }
  //       images[indexToUpdate].classList.add('active');
  //       break;
  //     }
  //     case 'prev': {
  //       indexToUpdate = currentIndex - 1;
  //       if (indexToUpdate < 0) {
  //         indexToUpdate = images.length - 1;
  //       }
  //       images[indexToUpdate].classList.add('active');
  //       break;
  //     }
  //     default: {
  //       indexToUpdate = currentIndex;
  //       images[indexToUpdate].classList.add('active');
  //     }
  //   }
  //   return indexToUpdate;
  // }

  // function setDotColor(index) {
  //   dots[index].classList.add('filled');
  // }

  // function removeDotColor(index) {
  //   dots[index].classList.remove('filled');
  // }

  // function dotClickHand(event) {
  //   let currentIndex = event.target.id;
  //   let activeImg = removeCurrentImg(images);
  //   removeDotColor(activeImg);
  //   setImg(currentIndex);
  //   setDotColor(event.target.id);
  // }


  // setInterval(() => {
  //   let activeImg = removeCurrentImg(images);
  //   removeDotColor(activeImg);
  //   let nextImgIndex = setImg(activeImg, 'next');
  //   setDotColor(nextImgIndex);
  // }, 8000);
