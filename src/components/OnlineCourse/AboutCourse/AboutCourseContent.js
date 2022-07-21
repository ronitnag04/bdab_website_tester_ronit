import React from "react"
import styled from "styled-components"
import OCPageBanner from "../OCPageBanner"
// import MaterialsCards from "./MaterialsCards"

const OuterContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: #032345;
    width: 100%;  
    height: 100%;
    overflow: auto; 
`

const BackgroundImg = styled.img`
  opacity: .3;
  position: absolute;
  background-size: cover;
  background-attachment: fixed;
`

const InnerContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
  align-items: flex-start;
  position: absolute;
  width: 80%;
  top: 20%;
  left: 5%;
  right: 10%;
  transform: translate(5%, 5%);

  .item-0 { order: 0; }
  .item-1 { order: 1; }
  .item-2 { order: 2; }

  @media (max-width: 1700px) { top: 15%; }
  @media (max-width: 1500px) { top: 16% }
  @media (max-width: 1400px) { top: 15%; right: 40%;}
  @media (max-width: 900px) { top: 12%; right: 20%; }
  @media (max-width: 570px) { top: 11%; right: 20%; }
  @media (max-height: 600px) { top: 20% }
  @media (max-height: 500px) { top: 30% }
`

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

const ContentContainer = styled.div`
    position: absolute;
    width: 100%;
    margin-top: 5%;
`

const AboutCourseContent = () => (
  <OuterContainer>
    <BackgroundImg src={require("../../../images/footer_art.png")} alt="art"/>
    <InnerContainer>
        <ContentContainer>
            <OCPageBanner title="About the Course" description="read about why we made this course!"/>
            {/* <MaterialsCards/> */}
        </ContentContainer>
    </InnerContainer>
  </OuterContainer>
)

export default AboutCourseContent
