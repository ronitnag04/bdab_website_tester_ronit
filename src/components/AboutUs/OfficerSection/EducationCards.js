import React from "react"
import styled from "styled-components"
import SectionTitle from "../../SectionTitle"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {educationArr} from './OfficerSectionComponents/OfficerHeadshots';

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
                name="Sophie Lou"
                photoLink={educationArr[0]}
                role="Head Instructor"
                interest1="Pop Music"
                interest2="Binge Watching Netflix"
                interest3="Photography"
                linkedin="https://www.linkedin.com/in/sophiexuanlou/"
            />
            <OfficerCard className="item-1"
                name="Varsha Madapoosi"
                photoLink={educationArr[1]}
                role="Head Instructor"
                interest1="Drawing & Painting"
                interest2="Playing Cards"
                interest3="Watching Movies"
                linkedin="https://www.linkedin.com/in/varshamadapoosi/"
            />
            <OfficerCard className="item-2"
                name="Kyra Wong"
                photoLink={educationArr[2]}
                role="Head Instructor"
                interest1="Settlers of Catan"
                interest2="Houseplants "
                interest3="Cooking"
                linkedin="https://www.linkedin.com/in/kyra-wong/"
            />
            <OfficerCard className="item-3"
                name="Eddie Liu"
                photoLink={educationArr[3]}
                role="Head E-Learning Developer"
                interest1="Swimming"
                interest2="Basketball"
                interest3="Traveling"
                linkedin="https://www.linkedin.com/in/edwardfliu/"
            />
            <OfficerCard className="item-4"
                name="Sofia Sayyah"
                photoLink={educationArr[4]}
                role="Head E-Learning Developer"
                interest1="Reading"
                interest2="Baking"
                interest3="Listening to Music"
                linkedin="https://www.linkedin.com/in/sofia-sayyah/"
            />
        </CardContainer>
    </>
)

export default EducationCards