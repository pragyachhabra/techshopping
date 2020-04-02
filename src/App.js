import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart.js";
import Default from "./pages/Default.js";
import {Switch,Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer.js";
function App() {
  return (
    <>
    {/* navbar, sidebar, cart,footer*/}
    <Navbar />
    <Sidebar />
    <SideCart />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" exact component={Products} />
      <Route path="/products/:id" component={SingleProduct} />
      <Route path="/cart" component={Cart} />
      <Route component={Default} />
    </Switch>
    <Footer />
  </>

  );
}


export default App;
