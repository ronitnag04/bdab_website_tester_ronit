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
                name="Garima Gupta"
                photoLink={educationArr[0]}
                role="Head Instructor"
                interest1="Playing basketball"
                interest2="Watching Marvel movies"
                interest3="Photography"
                linkedin="https://www.linkedin.com/in/garima-gupta-a78a66183/"
            />
            <OfficerCard className="item-1"
                name="Sabi Can Ruso"
                photoLink={educationArr[1]}
                role="Head Instructor"
                interest1="Football (both actually)"
                interest2="Traveling"
                interest3="Duolingo"
                linkedin="https://www.linkedin.com/in/sabi-can-ruso-83648721b/"
            />
            <OfficerCard className="item-2"
                name="Sanjana Kotha"
                photoLink={educationArr[2]}
                role="Head Instructor"
                interest1="Hand lettering"
                interest2="Hiking"
                interest3="Baking"
                linkedin="https://www.linkedin.com/in/sanjana-kotha/"
            />
            <OfficerCard className="item-3"
                name="Eddie Liu"
                photoLink={educationArr[3]}
                role="OC Head of Marketing"
                interest1="Electronic Dance Music"
                interest2="Weight Training"
                interest3="Swimming"
                linkedin="https://www.linkedin.com/in/efliu/"
            />
            <OfficerCard className="item-4"
                name="Austin Ho"
                photoLink={educationArr[4]}
                role="OC Head of Web Development"
                interest1="Making Spotify playlists"
                interest2= "Trying new restaurants"
                interest3="Playing spikeball on the glade"
                linkedin="https://www.linkedin.com/in/aho1628/"
            />
            <OfficerCard className="item-5"
                name="Kaito Garcia"
                photoLink={educationArr[5]}
                role="OC Head of Curriculum"
                interest1="Basketball"
                interest2= "Guitar & Piano"
                interest3="Weighlifting"
                linkedin="https://www.linkedin.com/in/kaitogarcia/"
            />

        </CardContainer>
    </>
)

export default EducationCards
