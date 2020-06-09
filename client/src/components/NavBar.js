import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import './style.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
        <span id="greeting">
          Welcome
        </span>
      )}
      {!isAuthenticated && (
        <button id="nice" onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button id="nice" onClick={() => logout()}>Log out</button>}

    </div>
  );
};

export default NavBar;