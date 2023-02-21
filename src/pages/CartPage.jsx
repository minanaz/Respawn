import React from "react";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const CartPage = () => {
  return (
    <div>
    <Navbar/>
      SAVED
      <Cart />
      <Footer />

    </div>
  );
};

export default CartPage;
