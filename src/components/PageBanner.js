import React from "react"
import styled from "styled-components"
import "../pages/index.css"

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 70px;

  @media (max-width: 900px) { padding-top: 0px;}
  @media (max-height: 754px) { padding-top: 0px;}
`

const InnerContainer = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  height: 20%;
  width: 92%;
  .active { flex: 1 0 100%; }
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .item-0 { order: 0; }
  .item-1 { order: 1; }

  @media (max-width: 770px) { height: 40%; }
  @media (max-width: 760px) { height: 40%; }
  @media (max-width: 750px) { height: 50%; }
  @media (max-width: 750px) { height: 50%; }
  @media (max-width: 700px) { height: 60%; }
  @media (max-width: 500px) { height: 70%; }
  @media (max-width: 350px) { height: 65%; }
  @media (max-width: 300px) { height: 60%; }
`

const Title = styled.h1`
    font-family: 'Bebas Neue', cursive;
    font-size: 100px;
    font-weight: 400;
    color: #f2f2f3;
    letter-spacing: 0.4px;
    display: inline-block;
    -webkit-animation: fadeIn ease 2s;
    -moz-animation: fadeIn ease 2s;
    -o-animation: fadeIn ease 2s;
    -ms-animation: fadeIn ease 2s;

    @media (max-width: 500px) { font-size: 70px; }
    @media (max-width: 400px) { font-size: 55px; }
    @media (max-width: 350px) { font-size: 50px; }
    @media (max-width: 300px) { font-size: 50px; }
`

const Description = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 17px;
    text-transform: lowercase;
    color: #f2f2f3;
    letter-spacing: 0.4px;

    @media (max-width: 500px) { font-size: 15px; line-height: 18px; }
    @media (max-width: 400px) { font-size: 14px; line-height: 17px; }
    @media (max-width: 350px) { font-size: 12px; line-height: 15px; }
    @media (max-width: 300px) { font-size: 9px; line-height: 12px; }
`

const Background = styled.img`
    z-index: 1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 2s;
    -moz-animation: fadeIn ease 2s;
    -o-animation: fadeIn ease 2s;
    -ms-animation: fadeIn ease 2s;
    
    @keyframes fadeIn {
      0% {opacity:0; transform: translateY(-20px);}
      100% {opacity:1; transform: translateY(0);}
    }
    
    @-moz-keyframes fadeIn {
    0% {opacity:0; -moz-transform: translateY(-20px);}
    100% {opacity:1; -moz-transform: translateY(0);}
    }
    
    @-webkit-keyframes fadeIn {
      0% {opacity:0; -webkit-transform: translateY(-20px);}
      100% {opacity:1; -webkit-transform: translateY(0);}
    }
    
    @-o-keyframes fadeIn {
      0% {opacity:0; -o-transform: translateY(-20px);}
      100% {opacity:1; -o-transform: translateY(0);}
    }
    
    @-ms-keyframes fadeIn {
      0% {opacity:0; -ms-transform: translateY(-20px);}
      100% {opacity:1; -ms-transform: translateY(0);}
    }
`

const PageBanner = (props) => {
  return (
    <Container>
      <InnerContainer>
        <Title className="item-0">{props.title}</Title>
        <div class="active"><a href="#"></a></div>
        <Description className="item-1">{props.description}</Description>
      </InnerContainer>
      <Background src={require("../images/page_banner_background.png")}/>
    </Container>
  )
}

export default PageBanner

