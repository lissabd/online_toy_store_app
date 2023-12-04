import React, { useState, useRef, useEffect } from 'react';
import Productdetail from './productdetail';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FaRegSadCry } from "react-icons/fa";
import './styles/shop.css';
import PriceFilter from './pricefilter';
import Modal from './modal';
import BreadCrumb from './breadcrumb';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router';

const PRODUCTS_PER_ONE_PAGE = 8;

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [priceFilter, setPriceFilter] = useState({ minPrice: '', maxPrice: '' });
  const productsSection = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState(Productdetail);
  const [modalState, setModalState] = useState(false);

  const numberOfProductVisited = page * PRODUCTS_PER_ONE_PAGE;

  const scrollToSection = (elemref) => {
    window.scrollTo({
      top: elemref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleChangeFilter = (newFilter) => {
    setPriceFilter(newFilter);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const filterProduct = (someProduct) => {
    const inWhichCategory = (selectedCategory === 'All' || someProduct.Cat === selectedCategory);
    const productPrice = parseFloat(someProduct.Price.replace('$', ''));
    const inPriceRange = (
      (priceFilter.minPrice === '' || productPrice >= priceFilter.minPrice) &&
      (priceFilter.maxPrice === '' || productPrice <= priceFilter.maxPrice)
    );

    return inWhichCategory && inPriceRange;
  };

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const displayProducts = isMobile
    ? products.filter(filterProduct) // Все продукты на одной странице на телефонах
    : products
      .filter(filterProduct)
      .slice(numberOfProductVisited, numberOfProductVisited + PRODUCTS_PER_ONE_PAGE);

  const addToCart = (curElm) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = existingCart.find(item => item.id === curElm.id);

    if (existingItem) {
      alert("This item is already in your cart.");
    } else {
      existingCart.push({ ...curElm, qty: 1 });
      alert("Item added to your cart.");
    }
    localStorage.setItem('cart', JSON.stringify(existingCart));
  };

  return (
    <>
      <BreadCrumb currentPage="Shop" />
      <div className='products'>
        <div className='container'>
          <div className='before-price'>
            <div className='filter'>
              <div className='categories'>
                <h2>Categories</h2>
                <ul>
                  <li onClick={() => { setSelectedCategory('All'); scrollToSection(productsSection); }}>All</li>
                  <li onClick={() => {setSelectedCategory('Dolls'); scrollToSection(productsSection); }}>Dolls</li>
                  <li onClick={() => {setSelectedCategory('Cars'); scrollToSection(productsSection); }}>Cars</li>
                  <li onClick={() => {setSelectedCategory('Books'); scrollToSection(productsSection); }}>Books</li>
                  <li onClick={() => {setSelectedCategory('Plush'); scrollToSection(productsSection); }}>Plush</li>
                  <li onClick={() => {setSelectedCategory('Meccano'); scrollToSection(productsSection); }}>Meccano</li>
                  <li onClick={() => {setSelectedCategory('Puzzles'); scrollToSection(productsSection); }}>Puzzles</li>
                </ul>
              </div>
              <div className='price'>
              <PriceFilter  onFilterChange={handleChangeFilter} />
              </div>
            </div>           
            <div className='text-pic-block'>
              <img src='./online_toy_store_app/images/for-shop-main-pic.jpg' alt="toys"></img>
              <h1>Shop</h1>
              <p>Have you ever wondered how grateful can be your pet for your care and love? Little hearts of those 
                animals we take care of are able to warm us and hide from sad thoughts no matter how big our pets are.
                They may be small and fearful or big and brave, obedient or self-willed, they may differ in color and shape,
                but all they have is love in their hearts which we can easily discover just looking into their eyes.
                </p>
            </div>
          </div>
          <div ref={productsSection} className='productbox'>
            <div className='contant'>
              {displayProducts.length > 0 ? (
                displayProducts.map((curElm) => {
                  if (filterProduct(curElm)) {
                    return (
                      <div className='box' key={curElm.id} >
                          <div className='img_box'>
                          <img src={curElm.Img} alt={curElm.Title}></img>
                          <div className="icon">
                          <li onClick={() => addToCart(curElm)}><AiOutlineShoppingCart /></li>
                            <div className='liu'>
                            <li><BsEye onClick={() => {
                                  setSelectedProduct(curElm);
                                  setModalState(true);
                                }} />
                            </li>
                            </div>
                          </div>
                        </div>
                        <div className='detail'>
                          <p>{curElm.Cat}</p>
                          <h3>{curElm.Title}</h3>
                          <h4>{curElm.Price}</h4>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <div className='zero-products'>                 
                    <h4>Sorry ... </h4>
                    <h5>No sush product</h5>
                    <FaRegSadCry />              
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        active={modalState}
        onClose={() => setModalState(!modalState)}
        product={selectedProduct}
        addToCart={addToCart}
      />
      {!isMobile && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={Math.ceil(products.length / PRODUCTS_PER_ONE_PAGE)}
          onPageChange={changePage}
          containerClassName={"navigationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
        />
      )}
    </>
  );
};

export default Shop;
