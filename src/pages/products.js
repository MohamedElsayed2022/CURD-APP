import React, { useEffect, useState } from 'react'
import './Products.css'
import Swal from 'sweetalert2'
import { Form, Link } from 'react-router-dom'
const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])
    const getAllProducts = () => {
        fetch('http://localhost:1000/products').then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            }

            )
    }
    const deleteProduct = (productID) => {
        Swal.fire({
            title: `Are you Sure To Delete ID : ${productID}`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:1000/products/${productID}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        getAllProducts()
                    });

            }
        })
    };


    return (
        <div>
            <h1>Products</h1>
            <Link to={'./add'} className='btn btn-success mt-3 text-align-center'>Add New Product</Link>
            <table className="table table-striped mt-5 products-table ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th style={{ width: "100px" }}>Description</th>
                        <th>Price</th>
                        <th>operation</th>

                    </tr>
                </thead>
                <tbody>

                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{ (product.description.legth < 20 ) ? product.description : product.description.slice(0 , 20 )}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm' onClick={() => { deleteProduct(product.id) }}>Delete</button>
                                    <Link to={`../products/${product.id}`} className='btn btn-info btn-sm'>View</Link>
                                    <Link to={`../products/EditProduct`} className='btn btn-primary btn-sm'>Edit</Link>

                                </td>


                            </tr>
                        )

                    })}





                </tbody>


            </table>
        </div>
    )


};




export default Products
