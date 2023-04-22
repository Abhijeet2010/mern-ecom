import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  useEffect(() => {
    fetch("http://localhost:2000/profile", {
      credentials: "include",
    });
  }, []);
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/iSHOP LOGO.svg" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
