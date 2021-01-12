import React, { useState } from "react"
import styled from "styled-components"
import FooterLinks from "./FooterLinks"
import Copyright from "./Copyright"
import Logo from "./Logo"

const FooterNavigation = styled.div`
  min-height: 35vh;
  display: flex;
  background-color: #16345b;
  background-attachment: fixed;
  background-position: top right;
  justify-content: space-evenly;
  align-items: center;
  position:absolute;
  left:0;
  right:0;
  overflow-y:hidden;

  .item-0 { order: 0; }
  .item-1 { order: 1; }
  .active { flex: 0 0 0%; }

  @media (max-width: 900px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    .active { flex: 1 0 100%; }
  }
`

const FooterImage = styled.img`
  opacity: .2;
  position: absolute;
  background-size: cover;
  background-attachment: fixed;
`



const Footer = () => {
  return (
    <>
      <FooterNavigation>
        <FooterImage src={require("../../images/footer_art.png")} alt="art"/>
        <Logo className="item-0"/>
        <div class="active"><a href="#"></a></div>
        <FooterLinks className="item-1"/>
      </FooterNavigation>
    </>
  )
}

export default Footer
