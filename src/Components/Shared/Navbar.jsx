import React, { useEffect, useRef, useState } from "react";
import logoImg from "../../assets/images/bwkf-trademark-logo.svg";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";

function Navbar() {
  const [sidebarBtn, setsidebarBtn] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setsidebarBtn(false);
    } 
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <header className="header-wrapper">
        <div className="top-header-bg">
          <div className="container">
            <div className="top-header d-flex">
              <ul className="header-nav">
                <li a="href">Offers</li>
                <li a="href">Fanbook</li>
                <li a="href">Download App</li>
                <li a="href">Tribe Membership</li>
              </ul>
              <ul>
                <li a="href">Contact Us</li>
                <li a="href">Order</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="main-header">
          <div className="row middle-header">
            <div className="col-md-2">
              <img src={logoImg} />
            </div>
            <div className="col-md-5">
              <ul>
                <Link to="men-clothing">MEN</Link>
                <li>WOMEN</li>
                <li>MOBILE COVERS</li>
              </ul>
            </div>
            <div className="col-md-5">
              <div className="right-nav-main">
                <form className="search-section">
                  <CiSearch className="search-icon" />
                  <input
                    className=""
                    type="text"
                    placeholder="Search by product, category or collection"
                  />
                </form>
                <h6>|</h6>
                <button className="login-btn">Login</button>
                <CiHeart className="list-bag-icon" />
                <IoBagOutline className="list-bag-icon" />
              </div>
            </div>
          </div>
          <div className="bottom-nav" id="bottomNav" style={{ padding: "0px 30px" }}>
            <ul>
              <li>LIVE NOW</li>
              <li>MEN</li>
              <li>WOMEN</li>
              <li>ACCESSORIES</li>
              <li>SHOP NOW</li>
              <li>HEAVY DUTY</li>
              <li>BEWAKOOF AIR</li>
              <li>OFFICIAL MERCH</li>
              <li>PLUS SIZE</li>
            </ul>
          </div>
          {/* <Slider/> */}
        </div>
      </header>

      {/* small bar */}
      <div className="small-navbar">
        <div className="small-header">
          <HiBars3CenterLeft
            style={{ fontSize: "24px" }}
            onClick={() => {
              setsidebarBtn((prev) => !prev);
            }}
          />
          <img src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" />
        </div>
        <div className="small-icons">
          <CiSearch />
          <CiHeart />
          <IoBagOutline />
        </div>
      </div>
      {sidebarBtn && (
        <div className="sidebar" ref={ref}>
          <div className="guest-name">
            <h5>Welcome Guest</h5>
            <Link to="">Login / Sign Up</Link>
          </div>
          <hr />
          <div>
            <p>Shop in</p>
            <ul>
              <li>
                <h5>Men</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Women</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Accessories</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-accessories--1--1684748737.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Yellow Friday Exclusive Drop</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Navigation-168x168-Yellow-Friday--2--1710484216.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Men</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Women</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Accessories</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-accessories--1--1684748737.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Yellow Friday Exclusive Drop</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Navigation-168x168-Yellow-Friday--2--1710484216.png"
                  style={{ height: "30px" }}
                />
              </li> <li>
                <h5>Men</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Women</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Accessories</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-accessories--1--1684748737.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Yellow Friday Exclusive Drop</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Navigation-168x168-Yellow-Friday--2--1710484216.png"
                  style={{ height: "30px" }}
                />
              </li> <li>
                <h5>Men</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Women</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Accessories</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-accessories--1--1684748737.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Yellow Friday Exclusive Drop</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Navigation-168x168-Yellow-Friday--2--1710484216.png"
                  style={{ height: "30px" }}
                />
              </li> <li>
                <h5>Men</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Women</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Accessories</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-accessories--1--1684748737.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Yellow Friday Exclusive Drop</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Navigation-168x168-Yellow-Friday--2--1710484216.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Men</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Women</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Accessories</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Circle-icon-accessories--1--1684748737.png"
                  style={{ height: "30px" }}
                />
              </li>
              <li>
                <h5>Yellow Friday Exclusive Drop</h5>
                <img
                  src="https://images.bewakoof.com/nav_menu/Navigation-168x168-Yellow-Friday--2--1710484216.png"
                  style={{ height: "30px" }}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
