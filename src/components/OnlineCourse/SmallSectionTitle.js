import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 50px 20px 20px 20px;
`

const Title = styled.h1`
  font-family: 'Montserrat', italic;
  font-size: 40px;
  font-style: bold;
  color: #414142;
  text-transform: lowercase;
  letter-spacing: 0.4px;

  @media (max-width: 500px) {
    font-size: 35px;
  }
`

const Decoration = styled.img`
  height: 10px;
  margin: 20px 20px 0px 20px;

  @media (max-width: 600px) {
    height: 8px;
    margin-bottom: 10px;
  }

  @media (max-width: 370px) {
    margin-top: 10px;
  }
`

const SmallSectionTitle = (props) => {
  return (
    <Container>
      <Title style={{color: props.color === "light"? "#f1f1f2" : "#414142"}}>{props.title}</Title>
      <Decoration src={require("../../images/header_dots.png")}/>
    </Container>
  )
}

export default SmallSectionTitle