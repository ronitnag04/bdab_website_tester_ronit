import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 60px 0px 20px 0px;

    @media (max-width: 500px) {
        justify-content: center;
        text-align: center;
    }
`

const OCFLogo = styled.img`
    height: 35px;
    opacity: 0.6;
    margin: 10px 10px 0px 30px;

    @media (max-width: 500px) {
        margin: 10px 20px 0px 20px;
    }
`

const Description = styled.span`
    width: 330px;
    font-family: 'Montserrat', sans-serif;
    font-style: regular;
    font-weight: 400;
    font-size: 9px;
    line-height: 13px;
    color: #bdbec1;
    letter-spacing: 0.4px;
    opacity: 0.8;
    margin: 10px;
`

const Copyright = () => {
  return (
    <Container>
        <a href="https://www.ocf.berkeley.edu/" rel="noreferrer" target="_blank">
            <OCFLogo src={require("../../images/ocf-hosted-penguin.svg")} alt="art"/>
        </a>
        <Description>
        Copyright © 2022 Big Data at Berkeley. We are a student group acting independently of the University of 
            California. We take full responsibility for our organization and this website.
        </Description>
    </Container>
  )
}

export default Copyright