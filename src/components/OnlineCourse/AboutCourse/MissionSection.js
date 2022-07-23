import React from "react"
import styled from "styled-components"
import SectionTitle from "../SmallSectionTitle"
import Description from "../../Description"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f1f1f2;
    border: 10px solid #f1f1f2;
    border-radius: 25px;
    opacity: 0.7;
    margin-bottom: 100px;
`

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 30px;

    @media (max-width: 700px) { margin-top: 40px; }
`

const Contact = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #414142;
    letter-spacing: 0.4px;
    margin: 40px 30px 20px 30px;
    text-align: center;
    opacity: 0.6;

    @media (max-width: 700px) { font-size: 16px; line-height: 20px; margin: 60px 30px 20px 30px; }
    @media (max-width: 500px) { font-size: 14px; line-height: 18px; }
`

const MissionSection = () => (
    <Container>
        <SectionTitle title="Our Mission"></SectionTitle>
        <DescriptionContainer>
            <Description
                description="Our goal is to make data science education accessible to those of 
                all ages and locations. We aim to use our skills and educational experiences to 
                prepare the next generation of data scientists and thinkers. This self-paced 
                course will equip you with the skills and fundamental knowledge needed to succeed 
                in the real world!"
            />
            <Contact>For questions, contact us at bigdata.berkeley@gmail.com!</Contact>
        </DescriptionContainer>
    </Container>
)

export default MissionSection