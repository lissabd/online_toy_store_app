import React  from 'react';
import Nav from './nav';
import Footer from './footer';
import Shop from './shop';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.css';
import Cart from './cart';
import About from './about';
import Login from './Login';
import Registration from './Registration';
import Homeproduct from './homeproduct';
import './styles/home.css';
import ShopButton from './UI/ShopButton';
import { Link } from 'react-router-dom';
import BrandGallery from './BrandGallery';
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";


const Home = () => {
  return (
    <>
    <div className="card-container">
      <div className="bigCard">
        <div className='big-text'>
          <h1>
          Exclusive Toys
          </h1>
          <p>Special Offer for New Customer</p>
          <Link to="/shop"><ShopButton>Shop Now</ShopButton></Link>
        </div>
        <div className='toy-card'>
          <img src='./images/meccano/meccano-5.png' alt="robot"/>
        </div>
      </div>
      <div className="smallCardsContainer">
        <div className="smallCard first">
          <div className='small-text'>
             <div className='first-pic'>
                <img src='./images/plushes/plush-5.png' alt="lion"/>
             </div>
            <h2>Up to 50% Off</h2>
            <p>On Selected Items</p>
            <Link to="/shop"><ShopButton>Shop Now</ShopButton></Link>
          </div>
          <div className='small-plush'>
            <img src='./images/plushes/plush-5.png' alt="lion"/>
          </div>
        </div>
        <div className="smallCard second">
        <img src='./images/фон.png' alt="фог"/>
        <div className='fon-card'>
        <div className='small-last-text'>
            <h3>5% Off</h3>
            <p>On Lego</p>
            <Link to="/shop"><ShopButton>Shop Now</ShopButton></Link>
          </div>
        </div>         
        </div>
      </div>
    </div>
    <div className="grid-container">
            <div className="grid-item"> <img className='re' src="./online_toy_store_app/images/images-in-line-1page/books.jpg" alt="books"/>
                <p>Books</p>
            </div>
            <div className="grid-item"> <img src="./online_toy_store_app/images/images-in-line-1page/cars.jpg" alt="cars"/>
                <p>Cars</p>
            </div>
            <div className="grid-item">  <img src="./online_toy_store_app/images/images-in-line-1page/dolls.jpg" alt="dolls"/>
               <p>Dolls</p>
            </div>
            <div className="grid-item">  <img className='re' src="./online_toy_store_app/images/images-in-line-1page/meccano.jpg" alt="meccano"/>
                <p>Meccano</p>
            </div>
            <div className="grid-item">   <img src="./online_toy_store_app/images/images-in-line-1page/plush.jpg" alt="plush"/>
                <p>Plush</p>
            </div>
            <div className="grid-item">   <img src="./online_toy_store_app/images/images-in-line-1page/puzzles.jpg" alt="puzzles"/>
               <p>Puzzles</p>
            </div>
      </div>
      <div className='news-section'>
          <div className="email-container">
            <h3>Newsletter</h3>
            <p>Stay informed about the new arrivals, sales and offers or discover the latest trends! Follow us.</p>
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-button">Subscribe</button>
          </div>
          <div className="sale-container">
            <div className='text-sale'>
              <h2>50% Sale</h2>
              <p>With all of our team members being happy parents themselves,
              we have the experience and the caring it takes to run the best e-store. 
              </p>            
              <button className="shop-now-button">Shop Now</button>
            </div>
            <div className='img-sale'>
              <img src="./images/plushes/plush-3.png" alt="Product" />
            </div>
          </div>             
      </div>
      <h3 className='fonts'> Popular products</h3>
          <div className='product'>
            <div className='container3'>
              {
                Homeproduct.map((curElm) => 
                {
                  return (
                     <div className='box3' key={curElm.id}>
                       <Link to="/shop">
                        <div className='img_box3'>
                          <img src={curElm.Img} alt={curElm.Title}></img>
                        </div>
                       </Link>
                      <div className='detail3'>
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>{curElm.Price}</h4>
                      </div>
                    </div>
                  )                  
                })
              }
            </div>
          </div>
          <BrandGallery/>
          <div className='section-location'>
              <div className="store-container">
                <h4>Store Locator</h4>
                <p>We constantly arrange a variety of activities for our students and their parents, and for those who have not yet enrolled in our kindergarten.</p>
                <img src='./images/shop.jpg' alt="shop"/>
                <div className='list'>
                  <ul>
                    <li> <MdLocationPin /> Arbat street, 12</li>
                    <li> <FaClock /> Opened 9:45 AM </li>
                    <li> <FaPhone /> 8 (800) 555-35-35</li>
                  </ul>
                </div>
              </div>
              <div className="map-container">
                 <img src='./images/mapa.jpg' alt="map"/>
              </div>
          </div>
    </>
  );
};


const App = () => {
 
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}


export default App;
