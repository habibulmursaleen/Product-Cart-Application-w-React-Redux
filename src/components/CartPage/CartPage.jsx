import React from "react";
import { useSelector } from "react-redux";
import "../../styles/output.css";
import Navbar from "../Navbar";
import Billing from "./Billing";
import CartItem from "./CartItem";

const CartPage = () => {
  const cartItems = useSelector((state) => state.products.cartItems);

  const items = Object.keys(cartItems).map((productId) => ({
    ...cartItems[productId],
    productId,
  }));

  return (
    <div>
      <Navbar />
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {items.map((item) => (
                <CartItem key={item.productId} item={item} />
              ))}
            </div>
            <Billing />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
