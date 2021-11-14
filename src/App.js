import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import AuthProvider from './components/context/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Footer from './components/Footer/Footer';
import ProductDetails from './components/Products/ProductDetails';
import Profile from './components/Profile/Profile';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import { useState, useEffect } from 'react';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddProduct from './components/Products/AddProduct';
import AllProducts from './components/Products/AllProducts';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import AdminRoute from './components/AdminRoute/AdminRoute';
import ManageProducts from './components/ManageProducts/ManageProducts';
import Pay from './components/Pay/Pay';
import AddReview from './components/AddReview/AddReview';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const serviceLink = `https://mysterious-gorge-96095.herokuapp.com/products`;

  useEffect(() => {
    fetch(serviceLink)
      .then(res => res.json())
      .then(data => setProducts(data));
    setIsLoading(false)
  }, []);


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home all_product={products} isLoading={isLoading}></Home>
            </Route>
            <Route path="/home">
              <Home all_product={products}></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/exploreMore">
              <AllProducts all_product={products}></AllProducts>
            </Route>
            <PrivetRoute path="/profile">
              <Profile></Profile>
            </PrivetRoute>
            <PrivetRoute path="/pay">
              <Pay></Pay>
            </PrivetRoute>
            <PrivetRoute path="/addReview">
              <AddReview></AddReview>
            </PrivetRoute>
            <PrivetRoute path="/addOrder/:product_id">
              <PlaceOrder all_product={products}></PlaceOrder>
            </PrivetRoute>
            <PrivetRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivetRoute>
            <PrivetRoute exact path="/product/:product_id">
              <ProductDetails all_product={products} ></ProductDetails>
            </PrivetRoute>
            <AdminRoute path="/manageOrder">
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute path="/createAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path="/manageProduct">
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute path="/addProduct">
              <AddProduct></AddProduct>
            </AdminRoute>

            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
