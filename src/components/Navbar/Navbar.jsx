import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import "./styleNavbar/navbarStyle.css";
import Burger from "./Burger";

const Navbar = () => {
  const navigate = useNavigate();
  const pages = [
    { name: "HOME", link: "/", id: 1 },
    { name: "STUDIO", link: "/aboutUs", id: 2 },
    { name: "CAREERS", link: "/work", id: 3 },
    { name: "NEWS", link: "/news", id: 4 },
    { name: "GAMES", link: "/games", id: 5 },
    { name: "SAVED", link: "/cart", id: 5 },
  ];
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "HOME", href: "/" },
    { value: "STUDIO", href: "/aboutUs" },
    { value: "CAREERS", href: "/work" },
    { value: "NEWS", href: "/news" },
    { value: "GAMES", href: "/games" },
    { value: "SAVED", href: "/cart" },
  ];
  // const { user, handleLogOut } = useAuth();
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-img"></div>
        <span>Respawn</span>
      </div>
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
      </ul>
      <button onClick={() => navigate("/login")} className="btn-sing-in">
        Sign In
      </button>
      <div className="navbar-login">
        {/* {user.email ? (
          <button className="login__btn">
            <span onClick={handleLogOut}>Log Out</span>
          </button>
        ) : (
          <button className="login__btn">
            <Link to="/login">
              {" "}
              <span style={{ color: "white" }}>Sign In</span>
            </Link>
          </button>
        )} */}
      </div>
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
