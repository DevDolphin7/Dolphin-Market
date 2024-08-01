import * as React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/NavLogo.png";
import NavMobileDropdown from "./NavMobileDropdown";
import "./Nav.css";

const navigateLookup = {
  Browse: "/",
  Sell: "/Sell/ViewItems",
  Basket: "/Basket",
  Account: "/Account/OrderHistory",
};

export default function Nav() {
  return (
    <div className="NavBar">
      <Link to="/">
        <img src={logoImage} />
      </Link>
      <h1>Dolphin Market</h1>
      <NavMobileDropdown navigateLookup={navigateLookup} />
    </div>
  );
}
