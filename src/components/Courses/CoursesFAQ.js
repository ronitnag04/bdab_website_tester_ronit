import React from "react";
import styled from "styled-components"
import SectionTitle from "../BigSectionTitle"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: #fbfbfb;
    border: 40px solid #fbfbfb;
    width: 700px;
    border-radius: 25px;
    margin: 20px 20px 100px 20px;

    @media (max-width: 1000px) { width: 650px; }
    @media (max-width: 900px) { width: 550px; }
    @media (max-width: 700px) { width: 450px; }
    @media (max-width: 500px) { width: 350px; }
`

const Question = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 20px;
    color: #414142;
    letter-spacing: 0.4px;
    margin: 10px;
`

const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 10px 0px 10px 0px;
    width: 100%;
`

const Label = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #4f96c7;
    letter-spacing: 1px;
    margin: 10px;
`

const Answer = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: medium;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #414142;
    letter-spacing: 0.4px;
    margin: 0px 0px 0px 10px;
    width: 100%;
`

const Contact = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: semi-bold;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-transform: uppercase;
    color: #bdbec1;
    letter-spacing: 1px;
    margin: 20px 30px 20px 10px;

    @media (max-width: 500px) { font-size: 13px; line-height: 18px; }
`

const CoursesFAQ = () => {
  return (
    <>
      <SectionTitle title="FAQ"></SectionTitle>
      <Container>
          <Question>Should I take the bootcamp or online course?</Question>
          <AnswerContainer>
            <Label>Big Data Bootcamp Benefits</Label>
            <Answer>- Live</Answer>
            <Answer>- Receive immediate help when you have issues or questions</Answer>
            <Answer>- Structured 1.5 hrs/week (student won't fall behind)</Answer>
            <Answer>- Interactive activities: Data Science themed-Kahoot & Jeopardy</Answer>
          </AnswerContainer>
          <AnswerContainer>
            <Label>Online Course Benefits</Label>
            <Answer>- Self-paced</Answer>
            <Answer>- Available to those of all ages</Answer>
            <Answer>- Ease of access at any time or location</Answer>
            <Answer>- More in-depth because not restricted by time</Answer>
          </AnswerContainer>
          <Contact>Email bigdata.berkeley@gmail.com with any questions.</Contact>
      </Container>
    </>
  )
}

export default CoursesFAQ;
