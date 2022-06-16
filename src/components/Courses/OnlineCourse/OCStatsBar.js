import React from "react"
import styled from "styled-components"
import StatValue from "../../StatValue";

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 75%;
    flex-wrap: wrap;
    background-color: #f1f1f2;
    border: 30px solid #f1f1f2;
    border-top: 55px solid #f1f1f2;
    border-bottom: 55px solid #f1f1f2;
    border-radius: 25px;
    margin: 20px 10px 50px 10px;
    text-align: center;
`

const OCStatsBar = () => {
    return (
        <Container>
            <StatValue maxValue="100" suffix="+" label="minutes of recorded content" />
            <StatValue maxValue="8" suffix="" label="modules" />
        </Container>
    )
}

export default OCStatsBar