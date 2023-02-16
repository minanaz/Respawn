import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import "./styleNavbar/navbarStyle.css";
import Burger from "./Burger";

const Navbar = () => {
  const pages = [
    { name: "HOME", link: "/", id: 1 },
    { name: "STUDIO", link: "/aboutUs", id: 2 },
    { name: "CAREERS", link: "/work", id: 3 },
    { name: "NEWS", link: "/news", id: 4 },
  ];
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "HOME", href: "/" },
    { value: "STUDIO", href: "/aboutUs" },
    { value: "CAREERS", href: "/work" },
    { value: "NEWS", href: "/news" },
  ];
  // const { user, handleLogOut } = useAuth();
  return (
    <div className="navbar">
      <img
        src="data:image/png;base64,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"
        alt="logo"
      ></img>
      <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
      <ul className="navigation">
        {pages.map((page) => (
          <Link className="navigation__item" to={page.link} key={page.id}>
            <li className="navigation__item" sx={{ textDecoration: "none" }}>
              {page.name}
            </li>
          </Link>
        ))}
        {/* {user.email === "admin@admin.com" ? (
          <Link className="navigation__item" to="/admin">
            ADMIN
          </Link>
        ) : (
          <></>
        )} */}
      </ul>
      <button className="btn-sing-in">Sign In</button>
      <div className="search">
        <input className="search-inp" type="text" placeholder="search..." />
        <img src="https://ru.reactjs.org/search.svg" alt="" />
      </div>
      {/* 
      <div className="navbar-login">
        {user.email ? (
          <button className="login__btn">
            <span onClick={handleLogOut}>Log Out</span>
          </button>
        ) : (
          <button className="login__btn">
            <Link to="/auth">
              {" "}
              <span style={{ color: "white" }}>Log In</span>
            </Link>
          </button>
        )}
      </div> */}
      <Burger
        active={menuActive}
        setActive={setMenuActive}
        header={"Menu"}
        items={items}
      />
    </div>
  );
};

export default Navbar;
