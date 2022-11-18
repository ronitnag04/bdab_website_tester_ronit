import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px 20px 50px 50px;

  .item-0 { order: 0; margin: 50px 40px 50px 0px;; }
  .item-1 { order: 1; }
  .item-2 { order: 2; }
  .item-3 { order: 3; }

  @media (max-width: 1015px) {
    margin: 50px 60px 50px 50px;
  }

  @media (max-width: 950px) {
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    margin: 10px 60px 10px 50px;
  }

  @media (max-width: 800px) {
    justify-content: flex-start;
  }
`

const FooterTitle = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-style: semi-bold;
  font-weight: 600;
  font-size : 22px;
  color: #d1d3d4;
  display: inline-block;
  white-space: nowrap;
  margin-bottom: 25px;

  @media (max-width: 1115px) {
    margin: 3px 20px 25px 20px;
  }
  @media (max-width: 1015px) {
    margin: 3px 7px 25px 7px;
  }
`

const FooterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 50px 0px;
`

const FooterItem = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-style: regular;
  font-weight: 400;
  font-size : 16px;
  text-decoration: none;
  color: #d1d3d4;
  display: inline-block;
  white-space: nowrap;
  margin: 3px 90px 0px 0px;
  transition: all 200ms ease-in;
  position: relative;
  opacity: 1;

  :hover {
    opacity: .5;
  }

  @media (max-width: 1115px) {
    margin: 3px 20px 0px 20px;
  }
  
  @media (max-width: 1015px) {
    margin: 3px 7px 0px 7px;
  }
`

const FooterLinks = () => {
  return (
    <FooterContainer>
      <FooterItemContainer className="item-0">
        <FooterTitle>General</FooterTitle>
        <FooterItem to="/aboutus">About Us</FooterItem>
        <FooterItem to='/courses'>Courses</FooterItem>
        <FooterItem to='/workwithus'>Work With Us</FooterItem>
        <FooterItem to='/blog'>Blog</FooterItem>
        <FooterItem to='/contactus'>Contact Us</FooterItem>
        <FooterItem to='/apply'>Apply</FooterItem>
      </FooterItemContainer>

      <FooterItemContainer className="item-1">
        <FooterTitle>Join</FooterTitle>
        <FooterItem to="/aboutus">UC Berkeley Students</FooterItem>
        <FooterItem to='/courses'>General Students</FooterItem>
        <FooterItem to='/workwithus'>Organizations</FooterItem>
      </FooterItemContainer>

      <FooterItemContainer className="item-2">
        <FooterTitle>Courses</FooterTitle>
        <FooterItem to='/courses#bootcamp'>Big Data Bootcamp</FooterItem>
        <FooterItem to='/courses#online_course'>New Online Course</FooterItem>
        <FooterItem to='/online_course/intro/'>Beta V1 (Not Ready!)</FooterItem>
      </FooterItemContainer>
   
      <FooterItemContainer className="item-3">
        <FooterTitle>Connect</FooterTitle>
        <FooterItem to='https://www.facebook.com/bigdata.berkeley' target="_blank">Facebook</FooterItem>
        <FooterItem to='https://www.linkedin.com/company/big-data-at-berkeley' target="_blank">LinkedIn</FooterItem>
        <FooterItem to='https://www.instagram.com/bigdata.berkeley/' target="_blank">Instagram</FooterItem>
        <FooterItem to='https://medium.com/big-data-at-berkeley' target="_blank">Medium</FooterItem>
      </FooterItemContainer>
    </FooterContainer>
  )
}

export default FooterLinks
