import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    width: 285px;
    height: 210px;
    background-color: #f1f1f2;
    border: 10px solid #f1f1f2;
    padding: 40px 40px 10px 40px;
    border-radius: 22px;
    text-align: left;
    position: relative;
    opacity: 0.7;
    margin-left: 60px;

    @media (max-width: 1300px) { margin: 40px; }
    @media (max-width: 1200px) { margin: 40px 0px 0px 0px; }
`

const Title = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-style: bold;
    font-weight: 700;
    color: #4d4d4f;
    letter-spacing: 0.4px;
`

const LinkItem = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-style: regular;
  font-weight: 500;
  font-size : 16px;
  color: #15497d;
  display: inline-block;
  white-space: nowrap;
  position: relative;
  opacity: 0.9;

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`

const MoreMaterialsCard = (props) => {
    return (
        <Container>
            <Title>Materials To Have Open</Title>
            <LinkItem to={props.slides_link} rel="noreferrer" target="_blank">Slides</LinkItem>
            <LinkItem to={props.notebook_link} rel="noreferrer" target="_blank">Jupyter Notebook</LinkItem>
        </Container>
    )
}

export default MoreMaterialsCard