import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    width: 290px;
    height: 320px;
    background-color: #f1f1f2;
    border: 10px solid #f1f1f2;
    padding: 40px 40px 10px 40px;
    border-radius: 25px;
    text-align: left;
    margin: 20px;
    position: relative;

    @media (max-width: 500px) {
        height: 340px;
    }

    :hover {
        opacity: 1;
        cursor: pointer;
    }
`

const Label = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #4f96c7;
    letter-spacing: 1px;
    margin: 0px 0px 10px 0px;
`

const Title = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
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

const FooterItem = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-style: regular;
  font-weight: 500;
  font-size : 16px;
  color: #15497d;
  display: inline-block;
  white-space: nowrap;
  margin: 3px 90px 0px 0px;
  transition: all 200ms ease-in;
  position: relative;
  opacity: 1;

  :hover {
    opacity: .6;
  }
`

const ModuleCard = (props) => {
    return (
        <Container>
            <Label>Module {props.label}</Label>
            <Title>{props.title}</Title>
            <FooterItem to={props.lesson_vid_link} rel="noreferrer" target="_blank">Lesson Video</FooterItem>
            <FooterItem to={props.slides_link} rel="noreferrer" target="_blank">Slides</FooterItem>
            <FooterItem to={props.notebook_link} rel="noreferrer" target="_blank">Jupyter Notebook</FooterItem>
        </Container>
    )
}

export default ModuleCard