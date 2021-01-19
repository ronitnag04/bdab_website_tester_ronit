import React from "react"
import styled from "styled-components"
import SectionTitle from "../../SectionTitle"
import Description from "../../Description"
import BootcampDetailsCard from "./BootcampDetailsCard"
import BootcampStatsBar from "./BootcampStatsBar"
import QuoteCarousel from "./QuoteCarousel"

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`

const SectionComponents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Photo = styled.img`
    height: 420px;
    margin: 40px 40px 40px 40px;
    border-radius: 25px;

    @media (max-width: 1250px) { margin: 0px 40px 40px 40px; }
    @media (max-width: 1000px) { height: 440px; }
    @media (max-width: 700px) { height: 330px; }
    @media (max-width: 500px) { height: 230px; }
    @media (max-width: 450px) { height: 220px; }
    @media (max-width: 300px) { height: 170px; }
`

const BootcampSection = () => (
    <>
        <a id="bootcamp"/>
        <SectionTitle title="Big Data Bootcamp"></SectionTitle>
        <DescriptionContainer>
            <Description 
                description={<>This <b>live course</b> will provide high school students with a comprehensive introduction to 
                the fundamentals of data science through the Python language and relevant statistics concepts. No 
                experience required.</>}
            />
            <SectionComponents>
                <BootcampDetailsCard/>
                <Photo className="item-1" src={require("../../../images/courses/bootcamp_photo.png")}/>
            </SectionComponents>
        </DescriptionContainer>
        <QuoteCarousel/>
        <BootcampStatsBar/>
    </>
)

export default BootcampSection