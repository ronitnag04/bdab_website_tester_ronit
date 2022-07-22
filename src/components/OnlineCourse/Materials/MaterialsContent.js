import React from "react"
import styled from "styled-components"
import OCPageBanner from "../OCPageBanner"
import MaterialsCards from "./MaterialsCards"

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

const ContentContainer = styled.div`
    position: absolute;
    width: 100%;
    margin-top: 5%;
`

const MaterialsContent = () => (
  <OuterContainer>
    <BackgroundImg src={require("../../../images/footer_art.png")} alt="art"/>
    <InnerContainer>
        <ContentContainer>
            <OCPageBanner title="Materials" description="need a refresher? take a look at all of the course materials!"/>
            <MaterialsCards/>
        </ContentContainer>
    </InnerContainer>
  </OuterContainer>
)

export default MaterialsContent
