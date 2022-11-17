import React from "react"
import styled from "styled-components"
import StatValue from "../../StatValue";

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    margin: 40px 10px 0px 0px;
`

// const Container = styled.div`
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//     width: 75%;
//     flex-wrap: wrap;
//     background-color: #f1f1f2;
//     border: 30px solid #f1f1f2;
//     border-top: 55px solid #f1f1f2;
//     border-bottom: 55px solid #f1f1f2;
//     border-radius: 25px;
// `

const IntroStatsBar = () => {
    return (
        <Container>
            <StatValue maxValue="8" label="modules" />
            <StatValue maxValue="50" suffix="+" label="students taught" />
            <StatValue maxValue="120" suffix="+" label="minutes of content" />
            {/* <StatValue maxValue="9.2" decimals="1" suffix="/10" label="teaching effectiveness" /> */}
        </Container>
    )
}

export default IntroStatsBar