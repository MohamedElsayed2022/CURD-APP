import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CategoryDetails() {
    const [category , setCategory] = useState([])
    let { categoryID } = useParams();
    useEffect(() => {
        fetch(`http://localhost:1000/category/${categoryID}`)
            .then((res) => res.json())
            .then((data) => {
                setCategory(data)
            })
    })
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h3 className="card-title"> Title : </h3>  <p>{category.title}</p>
                    <h6 className="card-subtitle mb-2 text-body-secondary"><h3> price :  </h3>{category.price} $</h6>
                    <p className="card-text"><h2> Description : </h2>{category.description}</p>
                 
                </div>
            </div>
        </>
    )
}

export default CategoryDetails
