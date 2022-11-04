import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  font-family: 'Bebas Neue', cursive;
  font-size : 23px;
  text-decoration: none;
  color: #d1d3d4;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #d1d3d4;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #d1d3d4;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
  }

  @media (max-height: 500px) {
    font-size: 1.3rem;
  }
`

const SpecialNavItem = styled(Link)`
  font-family: 'Bebas Neue', cursive;
  font-size : 23px;
  text-decoration: none;
  color: #16345b;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  background-color: #d1d3d4;
  padding: 10px 16px;
  border-radius: 10px;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.8);
	transform: scale(1);
	animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.97);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
  
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
  
    100% {
      transform: scale(0.97);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  :hover {
    background-color: #b5deeb;
  }

  @media (max-width: 768px) { font-size: 1.3rem; }
  @media (max-height: 500px) { font-size: 1.3rem; }
  @media (max-height: 400px) { font-size: 1rem; }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/aboutus/">About Us</NavItem>
      <NavItem to="/courses/">Courses</NavItem>
      <NavItem to="/workwithus/">Work With Us</NavItem>
      <NavItem to="https://medium.com/big-data-at-berkeley">Blog</NavItem>
      <NavItem to="/apply/">Apply</NavItem>
      <NavItem to="/contactus/">Contact Us</NavItem>
      {<SpecialNavItem to="/online_course/intro/">New Online Course</SpecialNavItem>}
    </>
  )
}

export default NavbarLinks
