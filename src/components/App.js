import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { products } from '../images/ProductImages';
import { default as Components } from './Index';
import { default as CatalogItems } from './Catalog_components/Catalog_items/index';
import Shirt1 from './Catalog_components/Catalog_items/shirt1';
import '../styles/Styles.css';

// const [shirts, sweatshirts, sweatpants, accessories] = products;
// const shirtIDs = shirts.imgArr.map((item) => item.id);
// const sweatShirtIDs = sweatshirts.imgArr.map((item) => item.id);
// const sweatPantIDs = sweatpants.imgArr.map((item) => item.id);
// const accessoryIDs = accessories.imgArr.map((item) => item.id);

const App = () => {
  const { Nav, Footer, Home, About, Catalog, Shirts, Sweatshirts, Sweatpants, Accessories } = Components;
  console.log(CatalogItems);

  const createR = (arr, path) => {
    return arr.map((element) => {
      return (
        <Route path={`${path}/${element.id}`} component={element.item} exact />
      );
    });
  }
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          path="/catalog"
          render={({ match: { path } }) => (
            <>
              <Route path={`${path}/`} component={Catalog} exact />
              <Route
                path={`${path}/shirts`}
                render={({ match: { path } }) => (
                  <>
                    <Route path={`${path}/`} component={Shirts} exact />
                    {createR(CatalogItems, path)}
                  </>
                )}
              />
              <Route path={`${path}/sweatshirts`} component={Sweatshirts} />
              <Route path={`${path}/sweatpants`} component={Sweatpants} />
              <Route path={`${path}/accessories`} component={Accessories} />
            </>
          )}
        />
      </Switch>
      <Footer />
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
