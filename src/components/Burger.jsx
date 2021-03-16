import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  .BurgerIcon {
    width: 2rem;
    height: 2rem;
    background-color: $;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <GiHamburgerMenu className="BurgerIcon" />
    </StyledBurger>
  );
};

export default Burger;
