import React from "react";
import styled from "styled-components"
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SectionTitle from "../SectionTitle";

const properties = {
  duration: 100000000,
  scale: 3,
  prevArrow: <div style={{width: "40px", paddingRight: "10px"}}><img src={require("../../images/left_arrow.png")}/></div>,
  nextArrow: <div style={{width: "40px", paddingLeft: "10px"}}><img src={require("../../images/right_arrow.png")}/></div>
};

const photoLinks = [
  "gallery_1.jpg",
  "gallery_2.jpg",
  "gallery_3.jpg",
  "gallery_4.jpg",
  "gallery_5.jpg",
  "gallery_6.jpg",
  "gallery_7.jpg",
  "gallery_8.jpg",
  "gallery_9.jpg",
  "gallery_10.jpg",
  "gallery_11.png",
  "gallery_12.png",
  "gallery_13.png"
];

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`

const Container = styled.div`
  width: 60%;
  margin-bottom: 60px;

  @media (max-width: 570px) {
    width: 80%;
  }
`

const Photo = styled.img`
  width: 100%;
`

const PhotoCarousel = () => {
  return (
    <>
      <SectionTitle title="#BigDataEnergy"></SectionTitle>
      <Container className="slide-container">
        <Slide {...properties}>
          {photoLinks.map((photoLink) =>
              <PhotoContainer>
                <Photo src={require("../../images/apply/group_photos/"+photoLink)}/>
              </PhotoContainer>
          )}
        </Slide>
      </Container>
    </>
  );
}

export default PhotoCarousel;
