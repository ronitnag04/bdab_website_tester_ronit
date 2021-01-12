import React from "react"
import styled from "styled-components"

const Container = styled.div`
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
  align-items: flex-start;
  position: absolute;
  top: 20%;
  left: 5%;
  right: 52%;
  transform: translate(5%, 5%);

  .item-0 { order: 0; }
  .item-1 { order: 1; }
  .item-2 { order: 2; }

  @media (max-width: 1700px) { top: 15%; }
  @media (max-width: 1500px) { top: 16%; right: 54%; }
  @media (max-width: 1400px) { top: 15%; right: 50%;}
  @media (max-width: 900px) { top: 12%; right: 40%; }
  @media (max-width: 500px) { top: 11%; right: 20%; }
  @media (max-height: 600px) { top: 20% }
  @media (max-height: 500px) { top: 30% }
`

const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 70px;
  font-weight: 400;
  color: #f2f2f3;
  letter-spacing: 0.4px;
  margin-top: 10px;

  @media (max-width: 1370px) { font-size: 60px; }
  @media (max-width: 1270px) { font-size: 50px; }
  @media (max-width: 890px) { font-size: 45px; }
  @media (max-width: 800px) { font-size: 35px;}
`

const Description = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  font-size: 16px;
  line-height: 20px;
  color: #f2f2f3;
  letter-spacing: 0.4px;

  @media (max-width: 1370px) {
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: 1070px) {
    font-size: 12px;
    line-height: 15px;
  }

  @media (max-width: 800px) {
    font-size: 11px;
    line-height: 13px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  .item-0 { order: 0; }
  .item-1 { order: 1; }
`

const Button = styled.img`
  height: 40px;  
  margin: 20px 10px 10px 0px;
  
  :hover {
    opacity: .5;
  }

  @media (max-width: 1370px) {
    margin: 13px 10px 10px 0px;
    height: 30px;
  }

  @media (max-width: 800px) {
    height: 25px;
  }
`

const Gif = styled.img`
  z-index: 1;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top: 130px solid #022248; 

  @media (max-width: 1200px) { border-top: 140px solid #022248; }
  @media (max-width: 1100px) { border-top: 150px solid #022248; }
  @media (max-width: 1000px) { border-top: 170px solid #022248; }
  @media (max-width: 900px) { border-top: 200px solid #022248; }
  @media (max-width: 800px) { border-top: 160px solid #022248; }

`

const HomeBanner = () => (
  <>
    <Container>
      <Title className="item-0">Big Data at Berkeley</Title>
      <Description className="item-1">
        We are a student organization that strives to promote data science in our community through educational bootcamps 
        and industry-level data consulting. Est 2019.
      </Description>
      <ButtonContainer className="item-2">
        <a href="/aboutus">
          <Button className="item-0" src={require("../../images/home/home_button_1.png")}/>
        </a>
        <a href="/apply">
          <Button className="item-1" src={require("../../images/home/home_button_2.png")}/>
        </a>
      </ButtonContainer>
    </Container>
    <Gif src={require("../../images/home/home_animation.gif")} alt="gif"/>
  </>
)

export default HomeBanner
