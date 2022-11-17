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
    opacity: 0.9;

    @media (max-width: 500px) {
        height: 340px;
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

const ModuleCard = (props) => {
    return (
        <Container>
            <Label>Module {props.label}</Label>
            <Title>{props.title}</Title>
            <LinkItem to={props.lesson_vid_link} rel="noreferrer" target="_blank">Lesson Video</LinkItem>
            <LinkItem to={props.slides_link} rel="noreferrer" target="_blank">Slides</LinkItem>
            <LinkItem to={props.lesson_notebook_link} rel="noreferrer" target="_blank">Lesson Notebook</LinkItem>
            <LinkItem to={props.assignment_notebook_link} rel="noreferrer" target="_blank">Assignment Notebook</LinkItem>
        </Container>
    )
}

export default ModuleCard