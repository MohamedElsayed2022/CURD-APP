import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:1000/products", {
        title,
        price,
        description
      })
      .then((response) => {
        console.log(response.data);
        navigate('/products');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error
      });
  };

  return (
    <>
      <h1>Add Product</h1>
      <div>
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label htmlFor="product-Title" className="form-label">
              Title
            </label>
            <input
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="product-Title"
              aria-describedby="product title"
              placeholder="Enter Your Title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product-Price" className="form-label">
              Price
            </label>
            <input
              required
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              id="product-Price"
              aria-describedby="product title"
              placeholder="Enter Your Price"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product-Description" className="form-label">
              Description
            </label>
            <input
              required
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              id="product-Description"
              aria-describedby="product title"
              placeholder="Enter Your Description"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
