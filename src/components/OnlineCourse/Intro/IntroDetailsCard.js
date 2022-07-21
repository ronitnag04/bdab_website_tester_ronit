import React from "react"
import styled from "styled-components"
import IntroStatsBar from "./IntroStatsBar"
import { Link } from "gatsby"

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 60%;
    height: 100%;
    background-color: #fbfbfb;
    border: 28px solid #fbfbfb;
    border-radius: 25px;
    margin: 30px 0px 60px 0px;
    opacity: 0.9;

    @media (max-width: 1000px) { width: 100%; }
`

const Label = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #4f96c7;
    letter-spacing: 1px;
    margin: 20px 0px 10px 10px;
`

const Details = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: semi-bold;
    font-weight: 600;
    font-size: 15px;
    color: #231f20;
    letter-spacing: 0.4px;
    margin: 0px 10px 5px 10px;
`

const Button = styled.button`
  font-family: 'Bebas Neue', cursive;
  font-size : 23px;
  text-decoration: none;
  color: #16345b;
  display: inline-block;
  white-space: nowrap;
  margin: 15px;
  transition: all 200ms ease-in;
  background-color: #b5deeb;
  padding: 10px 16px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 30px;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.8);
	transform: scale(1);
	animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.97);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
  
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
  
    100% {
      transform: scale(0.97);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  :hover {
    background-color: #c4f0ff;
  }

  @media (max-width: 600px) { margin: 20px; font-size: 18px;}
`

const IntroDetailsCard = () => {
    return (
        <Container>
            <Label>What You'll Learn</Label>
            <Details>• Python fundamentals</Details>
            <Details>• How to manipulate data (NumPy & Pandas)</Details>
            <Details>• How to visualize data (Seaborn & Matplotlib)</Details>
            <Details>• The Data Science Life Cycle</Details>
            <Details>• Basics of Machine Learning</Details>
            <Details>• SQL ... and so much more!</Details>

            <Label>Experience</Label>
            <Details>No prior experience required!</Details>

            <Label>Earn</Label>
            <Details>Certificate of Completion</Details>

            <IntroStatsBar/>

            <Button as={Link} to={"/"}>I'm ready to learn!</Button>
        </Container>
    )
}

export default IntroDetailsCard