import { useDispatch, useSelector } from "react-redux";
import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { creatorder, getOrders, getallOrders } from "../store/orderSlice";
import { useEffect, useState } from "react";

const Checkout = () => {
 


  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Thank you for your order!</h3>
        </div>
        <span>
          Your order is being processed and will be delivered as fast as
          possible.
        </span>
        

        
       
  
      </div>
    </>
  );
};

export default Checkout;
