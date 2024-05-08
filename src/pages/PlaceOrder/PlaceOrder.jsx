import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const PlaceOrder = () => {
  const { getTotalAmount } = useContext(StoreContext);
  function order() {
    {
      getTotalAmount() === 0
        ? alert("your is Empty")
        : alert("order placed successfully");
    }
  }

  return (
    <>
      <Navbar />
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery information</p>
          <div className="mutli-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Second Name" />
          </div>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Street" />
          <div className="mutli-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="mutli-fields">
            <input type="text" placeholder="pin Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text " placeholder="Phone" />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Sub Total</p>
                <p>$ {getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>$ {getTotalAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>$ {getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</p>
              </div>
            </div>
            <button onClick={() => order()}>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default PlaceOrder;
