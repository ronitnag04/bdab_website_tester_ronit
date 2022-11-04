import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {projectArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const ProjectCards = () => (
    <>
        <CardContainer>
            <OfficerCard className="item-0"
                committee="project"
                name="April Zhang"
                photoLink={projectArr[0]}
                role="Project Manager"
                interest1="Reading"
                interest2="Spending time in nature"
                interest3="Making vegan desserts"
                linkedin="https://www.linkedin.com/in/aprilczhang/"
            />
            <OfficerCard className="item-1"
                committee="project"
                name="Tanvi Khot"
                photoLink={projectArr[1]}
                role="Project Manager"
                interest1="Basketball"
                interest2="Baking chocolate chip cookies"
                interest3="Painting"
                linkedin="https://www.linkedin.com/in/tanvi-khot/"
            />
            <OfficerCard className="item-2"
                committee="project"
                name="Surya Mamidyala"
                photoLink={projectArr[2]}
                role="Project Manager"
                interest1="Playing pickup ball"
                interest2="Shadow boxing"
                interest3="Listening to rap music"
                linkedin="https://www.linkedin.com/in/surya-mamidyala/"
            />
            <OfficerCard className="item-3"
                committee="project"
                name="Ayush Hariharan"
                photoLink={projectArr[3]}
                role="Project Manager"
                interest1="Playing basketball"
                interest2="Playing guitar"
                interest3="Watching anime"
                linkedin="https://www.linkedin.com/in/ayushhariharan/"
            />

             <OfficerCard className="item-6"
                committee="project"
                name="Sarang Deshpande"
                photoLink={projectArr[4]}
                role="Project Manager"
                interest1="Playing/watching sports"
                interest2="Going hiking in the Berkeley hills"
                interest3="Traveling"
                linkedin="https://www.linkedin.com/in/sarangmdeshpande/"
            /> 
            <OfficerCard className="item-5"
                committee="project"
                name="Pruthvi Innamuri"
                photoLink={projectArr[5]}
                role="Project Manager"
                interest1="Producing music"
                interest2="Playing basketball"
                interest3="Hanging out with friends"
                linkedin="https://www.linkedin.com/in/pruthvi-innamuri/"
            /> 

            
        </CardContainer>
    </>
)

export default ProjectCards
