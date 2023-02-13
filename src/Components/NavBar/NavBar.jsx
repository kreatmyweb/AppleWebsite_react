import React from "react";
import AppleLogo from "../../CommonResources/images/icons/logo-sm.png";
import SearchIcon from "../../CommonResources/images/icons/search-icon-sm.png";
import Cart from "../../CommonResources/images/icons/cart-sm.png";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks/NavLinks";

function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>

            <Link className="navbar-brand mx-auto" to="/">
              <img src={AppleLogo} />
            </Link>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <NavLinks LinkName="Mac" LinkPath="Mac" />
                <NavLinks LinkName="iphone" LinkPath="Iphone" />
                <NavLinks LinkName="ipad" LinkPath="Ipad" />
                <NavLinks LinkName="watch" LinkPath="Watch" />
                <NavLinks LinkName="Tv" LinkPath="Tv" />
                <NavLinks LinkName="Music" LinkPath="Music" />
                <NavLinks LinkName="Support" LinkPath="Support" />

                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={SearchIcon} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={Cart} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
