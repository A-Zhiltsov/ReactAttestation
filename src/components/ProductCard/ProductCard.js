import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Styles.css';
import product1 from '../../assets/img/product1.jpg';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <img className="product__img" src={product.image || product1} alt={product.name}/>
      <div className="product__content">
                <Link to={`/product/${product.id}`} className="product__heading">{product.name}</Link>
                <p className="product__text">{product.description}</p>
                <p className="product__price">${product.price}</p>
                {product.sizes && product.sizes.length > 0 && (
                    <p className="product__sizes">
                        Sizes: {product.sizes.join(', ')}
                    </p>
                )}
            </div>
      <button 
        className="product__add"
        onClick={() => onAddToCart(product)}
      >
        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG код остаётся таким же */}
        </svg>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;