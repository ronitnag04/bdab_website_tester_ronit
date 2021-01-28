import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 320px;
    background-color: #fbfbfb;
    border: 30px solid #fbfbfb;
    border-top: 55px solid #fbfbfb;
    border-bottom: 55px solid #fbfbfb;
    border-radius: 25px;
    text-align: center;
    margin: 0px 10px 50px 10px;

    @media (max-width: 500px) {
        margin: 0px 0px 50px 0px;
        border: 30px solid #fbfbfb;
        border-top: 45px solid #fbfbfb;
        border-bottom: 45px solid #fbfbfb;
    }
`

const Icon = styled.img`
    height: 100px;

    @media (max-width: 500px) {
        height: 80px;
    }

    @media (max-width: 350px) {
        height: 60px;
    }
`

const Title = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-size: 18px;
    font-weight: 700;
    color: #4d4d4f;
    letter-spacing: 0.4px;
    text-decoration: underline; 
    text-decoration-color: #fbfbfb;

    ::first-letter {
        color: #4f96c7;
        font-size: 25px;
    }

    @media (max-width: 500px) {
        font-size: 15px;
    }

    @media (max-width: 350px) {
        font-size: 13px;
    }
`

const Description = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    font-size: 13px;
    line-height: 15px;
    color: #4d4d4f;
    letter-spacing: 0.4px;
    text-decoration: underline; 
    text-decoration-color: #fbfbfb;

    @media (max-width: 500px) {
        font-size: 11px;
        line-height: 13px;
    }

    @media (max-width: 350px) {
        font-size: 10px;
        line-height: 12px;
    }
`

const CardWithoutLink = (props) => {
    return (
        <Container>
            <Icon src={props.icon}/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </Container>
    )
}

export default CardWithoutLink