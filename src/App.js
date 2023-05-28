import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/products';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Addproduct from './pages/Addproduct';
import EditProduct from './pages/EditProduct';
import Categories from './pages/Categories';
import CategoryDetails from './pages/CategoryDetails';
import AddCategory from './pages/AddCategory';


function App() {
  return (
    <div className="App">

        <Navbar />
        <div className='row'>
          <div className='col-2'>
            <Sidebar />
          </div>
          <div className='col-10'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='products' element={<Products />}></Route>
              <Route path='products/add' element={<Addproduct />}></Route>
              <Route path='products/:productID' element={<ProductDetails />}></Route>
              <Route path='products/edit/:productID' element={<EditProduct />}></Route>
              <Route path='categories' element={<Categories />}></Route>
              <Route path='category/:categoryID' element={<CategoryDetails />}></Route>
              <Route path='categories/add' element={<AddCategory />}></Route>












            </Routes>
          </div>
        </div>

    </div>
  );
}

export default App;
