import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {advisorArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const AdvisorCards = () => (
    <>
        <CardContainer>
            <OfficerCard className="item-0"
                name="Aurum Kathuria"
                photoLink={advisorArr[0]}
                role="Senior Advisor"
                interest1="Having Amazing Conversations"
                interest2="Optimizing Productivity"
                interest3="Self-Improvement"
                linkedin="http://www.linkedin.com/in/heyaurum"
            />
            <OfficerCard className="item-1"
                name="Ronak Laddha"
                photoLink={advisorArr[1]}
                role="Senior Advisor"
                interest1="Cold Brew"
                interest2="Playing Soccer"
                interest3="Making Large Spotify Playlists"
                linkedin="https://www.linkedin.com/in/ronak-laddha/"
            />
        </CardContainer>
    </>
)

export default AdvisorCards
