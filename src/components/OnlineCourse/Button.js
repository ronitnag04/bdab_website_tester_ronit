import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonItem = styled.button`
  font-family: 'Bebas Neue', cursive;
  font-size : 27px;
  text-decoration: none;
  color: #142418;
  display: inline-block;
  white-space: nowrap;
  margin: 5px;
  transition: all 200ms ease-in;
  background-color: #79a388;
  padding: 11px 17px;
  border-radius: 10px;
  text-align: center;
  opacity: 0.9;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.8);
	transform: scale(1);
	animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.96);
      box-shadow: 0 0 0 0 rgba(117, 161, 129, 0.7);
    }
  
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(117, 161, 129, 0);
    }
  
    100% {
      transform: scale(0.96);
      box-shadow: 0 0 0 0 rgba(117, 161, 129, 0);
    }
  }

  :hover {
    opacity: 1;
  }

  @media (max-width: 600px) { margin: 20px; font-size: 25px;}
`

const Button = (props) => {
    return (
        <ButtonItem as={Link} to={props.link}>
          {props.label} 
        </ButtonItem>
    )
}

export default Button