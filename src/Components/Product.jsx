import React, { useState } from 'react';
import './Product.css';
import rectangle from './Images/Rectangle1.svg';
import rectangle2 from './Images/Rectangle2.svg';
import rectangle3 from './Images/Rectangle3.svg';
import rectangle4 from './Images/Rectangle4.png';
import mock3 from './Images/Mock3.jpg';
import mock4 from './Images/mock4.jpg';
import mock5 from './Images/mock5.jpg';
import mock6 from './Images/mock6.jpg';
const ProductPage = () => {
  // Array of product variations with different prices and names
  const productVariants = [
    {
      image: rectangle,
      name: 'Fashionable Jacket',
      price: '$9',
    },
    {
      image: rectangle2,
      name: 'Stylish Coat',
      price: '$19',
    },
    {
      image: rectangle3,
      name: 'Elegant Blazer',
      price: '$29',
    },
    {
      image: rectangle4,
      name: 'Casual Hoodie',
      price: '$39',
    },
      {
        image: mock5,
        name: 'Kurta shalwar',
        price: '$19',
      },
  ];

  // Initialize selectedProduct with the first product variant
  const [selectedProduct, setSelectedProduct] = useState(productVariants[0]);

  return (
    <div className="container product-page">
      <div className="row">
        <div className="col-md-6">
          <div className="product-images">
            {/* Display the selected image */}
            <img src={selectedProduct.image} alt="Product" className="main-image img-fluid" />
            <div className="image-gallery">
              {/* Loop through the product variants and display thumbnails */}
              {productVariants.map((variant, index) => (
                <img
                  key={index}
                  src={variant.image}
                  alt={`Product Thumbnail ${index + 1}`}
                  className={`thumbnail ${selectedProduct.image === variant.image ? 'selected' : ''}`}
                  onClick={() => setSelectedProduct(variant)} // Update selected product when thumbnail is clicked
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 style={{color:'black', fontWeight:'500', fontSize:'70px'}}>{selectedProduct.name}</h1>
          <h2  style={{color:'cornflowerblue', fontWeight:'800', fontSize:'30px'}}>{selectedProduct.price}</h2>
          <p>This is a trendy and comfortable jacket perfect for all seasons.</p>
          <div className="sizes">
            <h4>Sizes:</h4>
            <div className="size-options">
              {['S', 'M', 'L', 'XL'].map((size, index) => (
                <button key={index} className="btn btn-outline-primary size-btn">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="colors">
            <h4>Colors:</h4>
            <div className="color-options">
              {['Red', 'Blue', 'Black'].map((color, index) => (
                <span
                  key={index}
                  className={`color-swatch ${color.toLowerCase()}`}
                ></span>
              ))}
            </div>
          </div>
          <button className="btn btn-primary mt-4">Add to Cart</button>
        </div>
      </div>

      <div className="related-products mt-5">
        <h3>Related Products</h3>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              {/* Related product image */}
              <img src={mock6} className="card-img-top" alt="Related Product" />
              <div className="card-body">
                <h5 className="card-title">Grey Shirt</h5>
                <p className="card-text">$9</p>
                <button className="btn btn-outline-primary">View</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              {/* Related product image */}
              <img src={mock5} className="card-img-top" alt="Related Product" />
              <div className="card-body">
                <h5 className="card-title">Kurta Shalwar</h5>
                <p className="card-text">$19</p>
                <button className="btn btn-outline-primary">View</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              {/* Related product image */}
              <img src={mock4} className="card-img-top" alt="Related Product" />
              <div className="card-body">
                <h5 className="card-title">C-Green Shirt</h5>
                <p className="card-text">$7</p>
                <button className="btn btn-outline-primary">View</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              {/* Related product image */}
              <img src={mock3} className="card-img-top" alt="Related Product" />
              <div className="card-body">
                <h5 className="card-title">Navy blue Shirt</h5>
                <p className="card-text">$8</p>
                <button className="btn btn-outline-primary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
