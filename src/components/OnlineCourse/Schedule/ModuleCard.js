import React, {useState, useRef} from "react"
import styled from "styled-components"
import Button from "../Button"

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

const Description = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-style: regular;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #4d4d4f;
    letter-spacing: 0.4px;

    @media (max-width: 500px) {
        font-size: 13px;
        line-height: 16px;
    }

    @media (max-width: 350px) {
        font-size: 11px;
        line-height: 14px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    position: absolute;
    bottom: 0%;
    padding: 0px 0px 5px 0px;

    @media (max-width: 450px) {
        position: relative;
        width: 100%;
    }
`

const ModuleCard = (props) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    let button;
    if (props.active) {
        console.log("IN HERE!")
        button = <ButtonContainer><Button label="BEGIN" link={props.link}/></ButtonContainer>;
    }

    return (
        <Container 
            onClick={props.onClick} 
            style={{ 
                backgroundColor: props.active ? '#abd6ba' : '#f1f1f2', 
                border: props.active ? '10px solid #abd6ba' : '10px solid #f1f1f2', 
                opacity: isHovering && !props.active ? '0.8' : props.selected > props.label ? '0.6' : '1'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Label style={{color: props.active ? '#50785b' : '#4f96c7'}}>
                Module {props.label}
            </Label>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            {button}
        </Container>
    )
}

export default ModuleCard