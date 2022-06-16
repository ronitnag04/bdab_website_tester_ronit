import React, { useState } from 'react';
import styled from "styled-components"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const countUpStyle = { 
    fontFamily: 'Montserrat',
    fontSize: "40px",
    fontStyle: "bold",
    fontWeight: "700",
    color: "#56a3da"
};

const CountUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 10px 20px 10px;
`

const Description = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-style: semi-bold;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #414142;
    letter-spacing: 0.4px;
    text-decoration: underline; 
    text-decoration-color: #f1f1f2;
    margin-top: 20px;

`

const StatValue = (props) => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);  

    function onVisibilityChange(isVisible) {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    }

    return (
      <CountUpContainer>
        <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
          <CountUp 
            style={countUpStyle} 
            start={0} 
            end={didViewCountUp ? props.maxValue : 0}
            suffix={props.suffix}
            duration={3} 
            decimals={props.decimals}
          />
        </VisibilitySensor>
        <Description>{props.label}</Description>
      </CountUpContainer>
    )
}

export default StatValue;
