import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getallcategory()
  }, []);
  const getallcategory = () => {
    fetch('http://localhost:1000/category')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }
  const deleteCategory = (categoryID) => {

    Swal.fire({
      title: `Are you sure to Delete ${categoryID}`,
      showCancelButton: true
    }).then((data) => {
      console.log(data)
      if (data.isConfirmed) {
        fetch(`http://localhost:1000/category/${categoryID}`, {
          method: "DELETE"

        }).then((res) => res.json())
          .then((data) => {
            console.log(data)
            getallcategory()

          })
      }
    })

  }
  return (
    <>
      <h1>Categories</h1>
      <Link to={'add'} type="button" className="btn btn-success mt-9">
        Add New Category
      </Link>
      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th style={{ width: '100px' }}>Description</th>
            <th>Price</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            return (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.title}</td>
                <td>{category.price}</td>
                <td>{category.description.slice(0, 20)}...</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteCategory(category.id)}>Delete</button>
                  <Link to={`/category/${category.id}`} className="btn btn-info btn-sm">View</Link>
                  <Link to={`/category/EditCategory`} className="btn btn-primary btn-sm">Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Categories;
