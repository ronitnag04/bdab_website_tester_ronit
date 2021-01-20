import React from "react"
import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import Description from "../Description"

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
`

const DetailsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    background-color: #f1f1f2;
    border: 30px solid #f1f1f2;
    border-radius: 25px;
    margin: 0px 40px 20px 40px;

    @media (max-width: 700px) { width: 70%; }
    @media (max-width: 570px) { border-bottom: 0px solid #f1f1f2; }
    @media (max-width: 300px) { width: 85%; }
`

const ImageContainer = styled.div`
    display: flex;
    align-items: flex-start;

    @media (max-width: 1700px) { 
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap; 
    }
`

const TimelineImage = styled.img`
    height: 250px;
    margin: 20px 0px 20px 0px;

    @media (max-width: 1100px) { height: 210px; }
    @media (max-width: 900px) { height: 190px; }
    @media (max-width: 800px) { height: 160px; margin: 20px 0px 10px 0px;}
    @media (max-width: 650px) { height: 135px; }
    @media (max-width: 570px) { height: 0px; }
`

const TimelineImage2 = styled.img`
    height: 271px;
    margin: 20px 0px 20px 0px;

    @media (max-width: 1100px) { height: 231px; }
    @media (max-width: 900px) { height: 211px; }
    @media (max-width: 800px) { height: 181px; }
    @media (max-width: 650px) { height: 141px; margin: 10px 0px 20px 0px;}
    @media (max-width: 570px) { height: 0px; }
`

const Button = styled.img`
    height: 45px;

    :hover {
        opacity: 0.9;
    }
`

const BerkeleyStudents = () => (
    <>
        <SectionTitle title="For UC Berkeley Students"></SectionTitle>
        <DescriptionContainer>
            <Description 
                description={<>For students interested in working on a consulting project or teaching data science: 
                    apply to our education committee, projects committee, or both for the Spring 2021 semester. There 
                    is only one application. <b>You must apply to at least one committee.</b> Looking forward to meeting you!</>}
            />
        </DescriptionContainer>
        <DetailsContainer>
            <Description 
                description={<>The application is due on Tuesday, February 2nd at 11:59 pm PST. 
                RSVP to our <a href="https://www.facebook.com/events/2915322715371031/" rel="noreferrer" target="_blank">Facebook event</a> to 
                find the Zoom links!</>}
            />
            <a href="http://bit.ly/bdab-sp21-app" rel="noreferrer" target="_blank">
                <Button src={require("../../images/apply/apply_button.png")}/>
            </a>
            <ImageContainer>
                <TimelineImage src={require("../../images/apply/berkeley_timeline_1.png")}/>
                <TimelineImage2 src={require("../../images/apply/berkeley_timeline_2.png")}/>
            </ImageContainer>
        </DetailsContainer>
    </>
)

export default BerkeleyStudents