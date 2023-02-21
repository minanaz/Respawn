import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./styleNavbar/navbarStyle.css";
import Burger from "./Burger";

const Navbar = () => {
  const { user, logout } = useAuth();

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
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-img">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABfCAMAAABWUID5AAAAMFBMVEVHcEz///////////////////////////////////////////////////////////9EPuwCAAAAEHRSTlMAI085DWfH//aigdiRs+frRWbgBgAAActJREFUeNrtmd2SgyAMRg0/MRDA93/bnc66UmC9weSi1e+y0zmTEjyhuDx5ct+AEYuFju08roKhYJvKcZVOfKPzKp904POqEbPT7aoS3vFh1cneXtZg1+4WDXZt7vbdeMrR+4RK+LArxKAG3lczZUF8pddkaXxurU3CeLs0SbJ4di3eyOJzP9Nk8aHH0ydVX3TXfjUtPijve82n1qGucxSN6Qwr+R6j94GfYfjg74UnRiz/ChWR6SK+RHg9tDYMujMvXYPnK/gMh+ybb5I/XBRm8KOR7fZGN0tNmsWzOxlWcXkPTuL90mJOTihmDr+5Fu9r8U0cT+FxaWPrDG4TZM85dmkTdfFJd3HyFJ7gZA1S19ptbmPGkw2yQbej5vBkx+LHrkCZlQJDX+P4uxzOK62YP0jsdpX76zdf8n32AGDjACnJAoDJdHlaEZ19TneftQ/+W/EcjbUmbCp48m73VlDAb7YR5llEhJyk8akdJ0X3uijK4rkf5dr3OZ+Ez6qLMx5hda+Lsih+/Psghx+bCyyvtHDUb1lDyPirTIikNE5KDhnplsOw6OJRCe+rwxVCUC0on2rDqFW8yjvP0YWRhOHcmtYmLGLh7KtnfwBM1sMEK6SVHgAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <div className="logo-name">
          <span>Respawn</span>
        </div>
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
      {user ? (
        <button onClick={logout} className="btn-sing-in">
          Sign Out
        </button>
      ) : (
        <button onClick={() => navigate("/login")} className="btn-sing-in">
          Sign In
        </button>
      )}
      {/* <button onClick={() => navigate("/login")} className="btn-sing-in">
        Sign In
      </button> */}
      {/* <div className="search">
        <input className="search-inp" type="text" placeholder="search..." />
        <img src="https://ru.reactjs.org/search.svg" alt="" />
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
