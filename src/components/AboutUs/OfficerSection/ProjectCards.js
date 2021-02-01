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
                name="Arshia Singhani"
                photoLink={projectArr[0]}
                role="Project Manager"
                interest1="Hiking"
                interest2="Coffee"
                interest3="Exploring new places"
                linkedin="https://www.linkedin.com/in/arshia-s-b2a361133/"
            />
            <OfficerCard className="item-1"
                committee="project"
                name="Shirley Wang"
                photoLink={projectArr[1]}
                role="Project Manager"
                interest1="Watching Shows"
                interest2="Piano"
                interest3="Board Games"
                linkedin="https://www.linkedin.com/in/shirleywang57/"
            />
            <OfficerCard className="item-2"
                committee="project"
                name="Ahmed Baqai"
                photoLink={projectArr[2]}
                role="Project Manager"
                interest1="Spikeball & Longboarding"
                interest2="Coldplay & Guitar"
                interest3="Sweater Weather"
                linkedin="https://www.linkedin.com/in/ahmed-baqai-601364176"
            />
            <OfficerCard className="item-3"
                committee="project"
                name="Ben Kaliczak"
                photoLink={projectArr[3]}
                role="Project Manager"
                interest1="Deep Learning"
                interest2="Community Building"
                interest3="Metal Crafting"
                linkedin="https://www.linkedin.com/in/benjamin-kaliczak-939450174/"
            />
            <OfficerCard className="item-4"
                committee="project"
                name="Shreyas Hariharan"
                photoLink={projectArr[4]}
                role="Project Manager"
                interest1="Discovering new music"
                interest2="Sunrise beach walks"
                interest3="City food touring"
                linkedin="https://www.linkedin.com/in/shreyashariharan"
            />
            <OfficerCard className="item-5"
                committee="project"
                name="Meg Khurana"
                photoLink={projectArr[5]}
                role="Project Manager"
                interest1="All things music history"
                interest2="Reading"
                interest3="Taking random walks"
                linkedin="https://www.linkedin.com/in/meg-khurana/"
            />
            <OfficerCard className="item-6"
                committee="project"
                name="Sina Ghandian"
                photoLink={projectArr[6]}
                role="Project Advisor"
                interest1="Piano"
                interest2="Gardening"
                interest3="Spending time with friends"
                linkedin="https://www.linkedin.com/in/sina-ghandian/"
            />
        </CardContainer>
    </>
)

export default ProjectCards