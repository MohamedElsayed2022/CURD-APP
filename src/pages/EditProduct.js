import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { productID } = useParams();

  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [description, setdescription] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:1000/products/${productID}`)
      .then((response) => {
        const { title, price, description } = response.data;
        settitle(title);
        setprice(price);
        setdescription(description);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const prodata = { title, price, description };

    axios
      .put(`http://localhost:1000/products/${productID}`, prodata)
      .then((response) => {
        if (response.status === 200) {
          alert("Saved successfully.");
          navigate("/");
        } else {
          throw new Error("Error occurred while updating.");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

    return ( 
      <>
      <h1>Add Category</h1>
      <div>
          <form onSubmit={handlesubmit} >
              <div className="mb-3">
                  <label htmlFor="product-Title" className="form-label">
                      Title
                  </label>
                  <input
                      type="text"
                      onChange={(e)=>settitle(e.target.title)}
                      className="form-control"
                      id="product-Title"
                      aria-describedby="product title"
                      placeholder="Enter Your Title"
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="product-Price"className="form-label">
                      Price
                  </label>
                  <input
                      type="number"
                      className="form-control"
                      onChange={(e)=> setprice(e.target.value)}
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
                      type="text"
                      onChange={(e)=>setdescription(e.target.value)}
                      className="form-control"
                      id="product-Description"
                      aria-describedby="product title"
                      placeholder="Enter Your Description"
                  />
              </div>
              <button  type="submit" className="btn btn-primary">
                  Update
              </button>
          </form>
      </div>
  </>
     );
}
 
export default EditProduct;