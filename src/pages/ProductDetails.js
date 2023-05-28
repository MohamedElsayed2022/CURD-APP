import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../pages/Products.css'

function ProductDetails() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:1000/products/${productID}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    }, [])
    let { productID } = useParams();
    return (
        <>
            {product &&
                <div className='allDetails'>
                    <div>
                        <h1>Title :</h1>
                        <h3>{product.title}</h3>
                    </div>
                    <div>
                        <h1>Description :</h1>
                        <p>{product.description}</p>
                    </div>
                    <div>
                        <h1>Price : <h5>{product.price} $</h5> </h1>
                    </div>
                    <div>
                        <h1>Title :</h1>
                        <h3>{product.title}</h3>
                    </div>


                </div>

            }

        </>
    )
}

export default ProductDetails
