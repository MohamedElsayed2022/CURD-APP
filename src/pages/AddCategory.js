import React, { useState } from 'react'
import axios from 'axios'
import { json, useNavigate } from 'react-router-dom'
function AddCategory() {
    const [price , setprice] = useState(0)
    const [title , settitle] = useState('')
    const [description , setdescription] = useState('')

    const formsubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:1000/category' ,{
            price,
            title,
            description
        })
        .then((data)=>{
            console.log(data)
        })
      
        setprice(0)
        settitle('')
        setdescription('')
        navigate('/categories')


    }
    let navigate = useNavigate();
    return (
        <>
            <h1>Add Category</h1>
            <div>
                <form onSubmit={formsubmit} >
                    <div className="mb-3">
                        <label htmlFor="product-Title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={(e)=>settitle(e.target.value) }
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
                            onChange={(e)=>setprice(e.target.value)}
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
                        <input required
                            type="text"
                            onChange={(e)=>setdescription(e.target.value)}
                            className="form-control"
                            id="product-Description"
                            aria-describedby="product title"
                            placeholder="Enter Your Description"
                        />
                    </div>
                    <button  type="submit" className="btn btn-primary">
                        Add Category
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddCategory
