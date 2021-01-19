import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 380px;
    background-color: #f1f1f2;
    border: 40px solid #f1f1f2;
    border-top: 55px solid #f1f1f2;
    border-bottom: 55px solid #f1f1f2;
    border-radius: 25px;
    text-align: center;
    margin: 0px 50px 50px 50px;

    @media (max-width: 500px) {
        margin: 0px 0px 50px 0px;
        border: 25px solid #f1f1f2;
        border-top: 45px solid #f1f1f2;
        border-bottom: 45px solid #f1f1f2;
    }

    :hover {
        background-color: #ededee;
        border: 40px solid #ededee;
        border-top: 55px solid #ededee;
        border-bottom: 55px solid #ededee;

        @media (max-width: 500px) {
            margin: 0px 0px 50px 0px;
            border: 25px solid #ededee;
            border-top: 45px solid #ededee;
            border-bottom: 45px solid #ededee;
        }
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
    font-size: 19px;
    font-style: bold;
    font-weight: 700;
    color: #4d4d4f;
    letter-spacing: 0.4px;

    @media (max-width: 500px) {
        font-size: 15px;
    }

    @media (max-width: 350px) {
        font-size: 13px;
    }
`

const Description = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-style: regular;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #4d4d4f;
    letter-spacing: 0.4px;

    @media (max-width: 500px) {
        font-size: 14px;
        line-height: 17px;
    }

    @media (max-width: 350px) {
        font-size: 13px;
        line-height: 16px;
    }
`

const HomeCard = (props) => {
    return (
        <Container as={Link} to={props.link} style={{textDecoration: "none"}}> 
            <Icon src={props.icon}/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </Container>
    )
}

export default HomeCard