import React, {useState} from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import './styles/modal.css';
import { SlBasket } from "react-icons/sl";

const Modal = ({active, onClose, product, addToCart}) => {
  const handleAddToCart = () => {
    addToCart(product); 
    onClose();
  };
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => onClose()}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <FaRegWindowClose className='close-modal' onClick={() => onClose()} / >
            {product && (
                <>
                   <div className='about-product'>
                    <img src={product.Img} alt={product.Title} className="modal-image" />                   
                    <div className='info'>
                        <h2>{product.Title}</h2>
                        <p>Category: {product.Cat}</p>
                        <p>Price: {product.Price}</p>                      
                        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in erat ut velit imperdiet semper eget ac tortor. Morbi tempus in leo quis tempus. Donec volutpat augue vitae orci sagittis facilisis. Etiam sed ante finibus. </p>
                       <div className='buttons-add'>
                            <button className='button_1' onClick={handleAddToCart}>Add to <SlBasket /></button>
                       </div>
                    </div>
                   </div>
                </>
                )}
        </div>
    </div>
  );
}

export default Modal;
