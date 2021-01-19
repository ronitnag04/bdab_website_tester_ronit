import React from "react"
import styled from "styled-components"
import SectionTitle from "../../SectionTitle"
import Description from "../../Description"
import OCDetailsCard from "./OCDetailsCard"
import OCStatsBar from "./OCStatsBar"

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`

const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Photo = styled.img`
    height: 330px;
    margin: 40px 40px 40px 40px;
    border-radius: 25px;

    @media (max-width: 1230px) { margin: 0px 40px 25px 40px; }
    @media (max-width: 1220px) { height: 430px; }
    @media (max-width: 700px) { height: 330px; }
    @media (max-width: 500px) { height: 230px; }
    @media (max-width: 450px) { height: 220px; }
    @media (max-width: 300px) { height: 170px; }
`

const OCSection = () => (
    <>
        <a id="online_course"/>
        <SectionTitle title="Intro to Data Science Online Course"></SectionTitle>
        <DescriptionContainer>
            <Description 
                description={<>This <b>self-paced course</b> provides a thorough introduction to the fundamentals of 
                data science to those of all ages and locations. You will learn how to program in the Python 
                language using NumPy and Pandas and the applications of various statistics concepts. 
                No experience required.</>}
            />
            <DetailsContainer>
                <OCDetailsCard/>
                <Photo className="item-1" src={require("../../../images/courses/ocd_photo.png")}/>
            </DetailsContainer>
            <OCStatsBar/>
        </DescriptionContainer>
    </>
)

export default OCSection