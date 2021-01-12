import React from "react"
import styled from "styled-components"
// import "../pages/index.css"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 80px 50px 20px 50px;
`

const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 70px;
  font-weight: 400;
  color: #414142;
  letter-spacing: 0.4px;

  @media (max-width: 500px) {
    font-size: 50px;
  }
`

const Decoration = styled.img`
  height: 10px;

  @media (max-width: 500px) {
    height: 8px;
  }

  @media (max-width: 370px) {
    margin-top: 10px;
  }
`

const SectionTitle = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Decoration src={require("../images/header_dots.png")}/>
    </Container>
  )
}

export default SectionTitle