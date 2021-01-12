import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const DetailsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: space-evenly;
    width: 400px;
    height: 310px;
    background-color: #f1f1f2;
    border: 50px solid #f1f1f2;
    border-radius: 25px;
    margin: 40px;

    @media (max-width: 500px) {
        width: 380px;
        height: 360px;
    }

    @media (max-width: 450px) {
        width: 360px;
    }
`

const Name = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 25px;
    color: #4f96c7;
    letter-spacing: 0.4px;
`

const OuterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px 0px 0px 0px;
`

const InnerContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    margin: 10px 0px 0px 0px;
`

const Label = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    color: #4f96c7;
    letter-spacing: 1px;
    margin: 0px 10px 10px 0px;
`

const Details = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: semi-bold;
    font-weight: 600;
    font-size: 13px;
    color: #231f20;
    letter-spacing: 0.4px;
    margin: 0px 10px 10px 0px;
`

const OCDetailsCard = () => {
    return (
        <DetailsContainer>
            <Name>Online Course Details</Name>
            <OuterContainer>
                <InnerContainer>
                    <Label>Price</Label>
                    <Label>Size</Label>
                    <Label>Mode</Label>
                    <Label>App</Label>
                    <Label>Links</Label>
                    <Label style={{marginBottom: "20px"}}>Course</Label>
                </InnerContainer>
                <InnerContainer>
                    <Details style={{letterSpacing: "0.5px"}}>FREE</Details>
                    <Details>Unlimited</Details>
                    <Details>Online</Details>
                    <Details>None</Details>
                    <a href="http://bit.ly/online_course_syllabus" rel="noreferrer" target="_blank">
                        <Details style={{textDecorationColor: "#231f20"}}>Syllabus</Details>
                    </a>
                    <a href="/contactus" rel="noreferrer" target="_blank">
                        <Details style={{textDecorationColor: "#231f20"}}>Available Fall 2021</Details>
                    </a>
                </InnerContainer>
            </OuterContainer>
        </DetailsContainer>
    )
}

export default OCDetailsCard