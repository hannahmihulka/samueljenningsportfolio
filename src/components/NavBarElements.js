import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #154c79; /* Update the background color */
  height: 60px; /* Set the height as needed */
  display: flex;
  justify-content: space-between; /* Space links evenly */
  align-items: center;
  position: fixed; /* Make it fixed */
  top: 0;
  left: 0;
  right: 0;
  z-index: 12;
  padding: 0 40px; /* Add padding as needed */
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #0c4f0d;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px; /* Adjust the horizontal position */
    transform: translate(0, -50%); /* Center vertically */
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.2rem; /* Adjust the margin as needed */
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
