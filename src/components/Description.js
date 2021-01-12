import React from "react"
import styled from "styled-components"

const DescriptionBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 120px;
    background-color: transparent;
    border-radius: 25px;
    text-align: center;
    margin: 25px;

    @media (max-width: 1100px) { height: 150px; }
    @media (max-width: 900px) { height: 180px; }
    @media (max-width: 500px) { width: 80%; }
    @media (max-width: 450px) { width: 75%; margin-top: 0px; margin-bottom: 0px; }
    @media (max-width: 300px) { width: 70%; }
`

const DescriptionText = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-style: semi-bold;
    font-weight: 600;
    font-size: 17px;
    line-height: 26px;
    color: #414142;
    letter-spacing: 0.4px;
    margin: 0px 20px 0px 20px;

    @media (max-width: 1300px) {
        font-size: 17px;
        line-height: 26px;
    }

    @media (max-width: 700px) {
        font-size: 16px;
        line-height: 22px;
    }

    @media (max-width: 500px) {
        font-size: 15px;
        line-height: 21px;
    }

    @media (max-width: 450px) {
        font-size: 13px;
        line-height: 18px;
        margin: 0px 10px 0px 10px;
    }

    @media (max-width: 300px) {
        font-size: 11px;
        line-height: 15px;
    }
`

const Description = (props) => (
    <>
        <DescriptionBox>
            <DescriptionText>{props.description}</DescriptionText>
        </DescriptionBox>
    </>
)

export default Description