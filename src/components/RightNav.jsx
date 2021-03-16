import React from "react";
import styled from "styled-components";

const NavMenuListe = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .NavbarMenuListe-item {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;

    .NavbarMenuListe-item {
      color: #fff;
    }
  }
`;

const RightNav = () => {
  return (
    <NavMenuListe>
      <li className="NavbarMenuListe-item">Home</li>
      <li className="NavbarMenuListe-item">About</li>
      <li className="NavbarMenuListe-item">Service</li>
      <li className="NavbarMenuListe-item">Portfolio</li>
      <li className="NavbarMenuListe-item">Products</li>
      <li className="NavbarMenuListe-item">Contact</li>
    </NavMenuListe>
  );
};

export default RightNav;
