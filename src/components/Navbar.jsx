import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/output.css";

const Navbar = () => {
  const numberOfCarts = useSelector((state) => state.products.numberOfCarts);
  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <Link to={"/"}>
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </Link>

          <div className="flex gap-4">
            <Link to={"/"} className="navHome" id="lws-home">
              Home
            </Link>
            <Link to={"/cartpage"} className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{numberOfCarts}</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
