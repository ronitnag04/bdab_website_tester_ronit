import React from 'react'
import styled from "styled-components"
import ModuleCommonQuestions from './ModuleCommonQuestions'
import ModuleResources from './ModuleResources'
import ModuleVideosSidebar from './ModuleVideosSidebar'
import ModuleVideo from './ModuleVideo'

const OuterContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: #032345;
    width: 100%;
    height:auto;
    min-height: 100%;
    overflow:auto;
    padding-bottom:100px;

    

`

const BackgroundImg = styled.img`
  opacity: .4;
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

const TitleContainer = styled.div`
    width: 100%;
    margin: 10px 20px 40px 5px;
`

const Label = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 20px;
    text-transform: lowercase;
    color: #f2f2f3;
    letter-spacing: 1px;
    margin: 0px 0px 10px 5px;
    opacity: 0.5;
`

const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 50px;
  line-height: 54px;
  font-weight: 400;
  color: #f2f2f3;
  letter-spacing: 0.4px;
  text-align: left;

  @media (max-width: 1370px) { font-size: 75px; line-height: 77px;}
  @media (max-width: 1270px) { font-size: 70px; line-height: 72px;}
  @media (max-width: 500px) { font-size: 67px; line-height: 69px;}
  @media (max-width: 410px) { font-size: 62px; line-height: 64px;}
`

const ButtonItem = styled.button`
  font-family: 'Bebas Neue', cursive;
  font-size : 27px;
  text-decoration: none;
  color: #16345b;
  display: inline-block;
  white-space: nowrap;
  margin: 40px 0px 40px 0px; 
  transition: all 200ms ease-in;
  background-color: #b5deeb;
  padding: 11px 17px;
  border: 5px solid #b5deeb;
  border-radius: 10px;
  text-align: center;
  opacity: 0.9;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.8);
	transform: scale(1);
	animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.96);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
  
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
  
    100% {
      transform: scale(0.96);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`

const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    
    gap: 50px;
    margin-bottom:50px;

    @media (max-width: 1200px) {
      flex-flow: wrap;
      justify-content: flex-start;
  }
`


const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: nowrap;
    align-items: center;
    gap: 50px;

    @media (max-width: 1200px) {
        flex-flow: wrap;
        justify-content: flex-start;
    }
`

const ModuleContent = (props) => {
    const [curVideo, setCurVideo] = React.useState(1)

  return (
    <OuterContainer>
        <BackgroundImg src={require("../../../images/footer_art.png")} alt="art"/>

        <InnerContainer>
            <TitleContainer>
                <Label>Module {props.label}</Label>
                <Title>{props.title}</Title>
            </TitleContainer>

            <TopContainer>
                <ModuleVideo
                        lesson_vid_link={props.module_videos_links[curVideo]['link']}
                />
                <ModuleVideosSidebar 
                    module_videos_links = {props.module_videos_links}
                    cur_video = {curVideo}
                    set_cur_video = {setCurVideo}
                />
            </TopContainer>

            <BottomContainer>
              <ModuleCommonQuestions 
                    module_common_questions={props.module_common_questions}
              />
              <ModuleResources
                    module_resources={props.module_resources}
              />
            </BottomContainer>
            
        </InnerContainer>

    </OuterContainer>
  )
}

export default ModuleContent