import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import RightNav from "./RightNav";

const NavMenu = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .NavMenuLogo {
    padding: 15px 0;
  }

  .NavMenuListe {
    padding: 1rem 0;
    display: flex;
    flex-flow: row nowrap;
    list-style: none;

    .NavbarMenuListe-item {
      padding: 1rem;
    }
  }
`;

const Nav = () => {
  return (
    <>
      <NavMenu>
        <div className="NavMenuLogo">Logo</div>
        <RightNav />
        <Burger />
      </NavMenu>
    </>
  );
};

export default Nav;
