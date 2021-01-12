import React from "react"
import styled from "styled-components"
import Card from "../CardWithLink"
import SectionTitle from "../SectionTitle"
import icon1 from "../../images/projects.png"
import icon2 from "../../images/education.png"

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .item-0 { order: 0; }
    .item-1 { order: 1; }
`

const CommitteeSection = () => (
    <>
        <SectionTitle title="Our Committees"></SectionTitle>
        <CardContainer>
            <Card className="item-0"
                title="Project Committee"
                icon={icon1}
                link="/workwithus"
                description={<>The Project Committee is dedicated to providing leaders with advanced analytics and 
                machine learning models to <b>guide critical decisions and accelerate growth.</b> We use data to find trends 
                that help businesses make better decisions.</>}
            />
            <Card className="item-1"
                title="Education Committee"
                icon={icon2}
                link="/courses"
                description={<>The Education Committee’s goal is to make data science education accessible to those 
                of <b>all ages and locations.</b> We run the Big Data Bootcamp hosted at UC Berkeley and a completely new, 
                original Intro to Data Science Online Course.</>}
            />
        </CardContainer>
    </>
)

export default CommitteeSection