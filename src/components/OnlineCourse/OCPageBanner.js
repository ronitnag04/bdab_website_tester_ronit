import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 80px;
  line-height: 84px;
  font-weight: 400;
  color: #f2f2f3;
  letter-spacing: 0.4px;
  text-align: center;

  @media (max-width: 1370px) { font-size: 75px; line-height: 77px;}
  @media (max-width: 1270px) { font-size: 70px; line-height: 72px;}
  @media (max-width: 500px) { font-size: 67px; line-height: 69px;}
  @media (max-width: 410px) { font-size: 62px; line-height: 64px;}
`

const Description = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 17px;
    text-transform: lowercase;
    color: #f2f2f3;
    letter-spacing: 0.4px;
    margin-bottom: 60px;
    text-align: center;

    @media (max-width: 500px) { font-size: 15px; line-height: 18px; }
    @media (max-width: 400px) { font-size: 14px; line-height: 17px; }
    @media (max-width: 350px) { font-size: 12px; line-height: 15px; }
    @media (max-width: 300px) { font-size: 9px; line-height: 12px; }
`

const OCPageBanner = (props) => (
  <>
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
  </>
)

export default OCPageBanner
