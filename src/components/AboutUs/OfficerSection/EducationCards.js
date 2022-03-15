import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {educationArr} from './OfficerSectionComponents/OfficerHeadshots';
import {founderArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const EducationCards = () => (
    <>
        <CardContainer>
            <OfficerCard className="item-0"
                name="Alayna Matthews"
                photoLink={educationArr[0]}
                role="Head Instructor"
                interest1="Cooking/Baking"
                interest2="Music"
                interest3=" NYT mini crossword puzzles "
                linkedin="https://www.linkedin.com/in/alaynamatthews/"
            />
            <OfficerCard className="item-1"
                name="Sabi Can Ruso"
                photoLink={educationArr[1]}
                role="Head Instructor"
                interest1="Guitar"
                interest2="Soccer"
                interest3="Tennis"
                linkedin="https://www.linkedin.com/in/sabi-can-ruso-83648721b/"
            />
            <OfficerCard className="item-2"
                name="Emily Holmes"
                photoLink={educationArr[2]}
                role="Head Instructor"
                interest1="Road Trips"
                interest2="Watching Euphoria"
                interest3="Playing IM Softball"
                linkedin="https://www.linkedin.com/in/emily--holmes/"
            />
            <OfficerCard className="item-3"
                name="Wajiha Zahid"
                photoLink={educationArr[3]}
                role="Head Instructor"
                interest1="Basketball"
                interest2="A24 Films"
                interest3="Woodworking"
                linkedin="https://www.linkedin.com/in/wajiha-zahid"
            />
            <OfficerCard className="item-4"
                name="Joshua Chandiramani"
                photoLink={educationArr[4]}
                role="Head E-Learning Developer"
                interest1="Tennis"
                interest2= "Exploring Berkeley"
                interest3="Hip Hop Dance"
                linkedin="https://www.linkedin.com/in/joshua-chandiramani/"
            />
            <OfficerCard className="item-5"
                name="Melissa Wong"
                photoLink={founderArr[0]}
                role="Head E-Learning Developer"
                interest1="Web Development"
                interest2= "Trying New Foods"
                interest3="Finding Memes"
                linkedin="https://www.linkedin.com/in/melissa-r-wong/"
            />

        </CardContainer>
    </>
)

export default EducationCards
