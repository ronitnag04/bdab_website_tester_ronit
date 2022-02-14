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
                name="Bryce Fang"
                photoLink={projectArr[0]}
                role="Project Manager"
                interest1="Being a Massive Foodie"
                interest2="Playing clarinet"
                interest3="Going on Long Bike Rides"
                linkedin="https://www.linkedin.com/in/bryce-fang-a732a120b"
            />
            <OfficerCard className="item-1"
                committee="project"
                name="Erin Hong"
                photoLink={projectArr[1]}
                role="Project Manager"
                interest1="Playing Sports"
                interest2="Going for Hikes"
                interest3="Baking"
                linkedin="https://www.linkedin.com/in/erin-hong-054535203/"
            />
            <OfficerCard className="item-2"
                committee="project"
                name="Surya Mamidyala"
                photoLink={projectArr[2]}
                role="Project Manager"
                interest1="Basketball & Football"
                interest2="Melodic rap/trap music"
                interest3="Trying out new food/boba"
                linkedin="https://www.linkedin.com/in/surya-mamidyala/"
            />
            <OfficerCard className="item-3"
                committee="project"
                name="Nicole"
                photoLink={projectArr[3]}
                role="Project Manager"
                interest1="Reading Philosophy"
                interest2="Hiking Berkeley"
                interest3="Exploring Music"
                linkedin="https://www.linkedin.com/in/nicolelrtin/"
            />

            {/* <OfficerCard className="item-6"
                committee="project"
                name="Sina Ghandian"
                photoLink={projectArr[6]}
                role="Project Advisor"
                interest1="Piano"
                interest2="Gardening"
                interest3="Spending time with friends"
                linkedin="https://www.linkedin.com/in/sina-ghandian/"
            /> */}
        </CardContainer>
    </>
)

export default ProjectCards
