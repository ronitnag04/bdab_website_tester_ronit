import React from "react";
import styled from "styled-components"
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SectionTitle from "../BigSectionTitle"

const properties = {
  duration: 30000,
  scale: 3,
  prevArrow: <div style={{width: "35px", paddingRight: "5px"}}><img src={require("../../images/left_arrow.png")} alt="arrow"/></div>,
  nextArrow: <div style={{width: "35px", paddingLeft: "5px"}}><img src={require("../../images/right_arrow.png")} alt="arrow"/></div>
};

const quotes = [
    {quote: '"When I look at the big picture, you guys have done a very good job all around. I know so much more than when we started the bootcamp and I can now complete most problems without screaming for my sister every few minutes!"', 
    name: "— Andrea McBride, CEO, McBride Sisters"
    },
    {quote: '"All the content that you guys taught was really informative and helped me to see that I really like data science and coding. I hope that there is another program or bootcamp next semester where we could learn even more about data science! :)"', 
    name: "— Andrea, CEO, Lovo"
    }
];

const Container = styled.div`
    width: 75%;
    background-color: #f1f1f2;
    border: 30px solid #f1f1f2;
    border-top: 55px solid #f1f1f2;
    border-radius: 25px;
    margin: 0px 40px 20px 40px;

    @media (max-width: 700px) { width: 70%; }
    @media (max-width: 500px) { width: 80%; }
`

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 25px;
    text-align: center;
`

const Quote = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #414142;
    letter-spacing: 0.4px;
    margin: 10px 10px 10px 10px;

    @media (max-width: 500px) { font-size: 14px; line-height: 17px; }
`

const Name = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-style: semi-bold;
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    text-transform: uppercase;
    color: #414142;
    letter-spacing: 1px;
    margin: 0px 10px 10px 0px;
`

const ClientTestimonials = () => {
  return (
    <>
      <SectionTitle title="Client Testimonials"></SectionTitle>
      <Container className="slide-container">
        <Slide {...properties}>
          {quotes.map((quote) =>
              <InnerContainer>
                  <Quote>{quote.quote}</Quote>
                  <Name>{quote.name}</Name>
              </InnerContainer>
          )}
        </Slide>
      </Container>
    </>
  );
}

export default ClientTestimonials;
