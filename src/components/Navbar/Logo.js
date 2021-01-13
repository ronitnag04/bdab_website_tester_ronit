import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 150px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 145px;
  }

  @media (max-width: 500px) {
    flex: 0 1 120px;
  }

  @media (max-height: 500px) {
    flex: 0 1 117px;
  }

`

const LogoImage = styled.img`
  margin-bottom: 0;
`

const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <LogoImage src={require("../../images/basic_logo.png")} alt="logo"/>
    </LogoWrap>
  )
}

export default Logo
