import { useState } from "react";
import logo from "../assets/images/choco1.jpg";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <div className="title">
      <img className="logo" src={logo}></img>
    </div>
  );
};

const NavComponents = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="">Cart</a>
        </li>
      </ul>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="header">
        <Title />
        <NavComponents />
        {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      </div>
    </>
  );
};

export default Header;