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
                name="Melissa Wong"
                photoLink={advisorArr[0]}
                role="Senior Advisor"
                interest1="Graphic Design"
                interest2="Swimming"
                interest3="Browsing Slack"
                linkedin="https://www.linkedin.com/in/melissa-r-wong/"
            />
            <OfficerCard className="item-1"
                name="Smruthi Balajee"
                photoLink={advisorArr[1]}
                role="Senior Advisor"
                interest1="Being in ~nature~"
                interest2="Eating Breakfast Food"
                interest3="Playing Ukulele (badly)"
                linkedin="http://www.linkedin.com/in/smruthibalajee"
            />
            <OfficerCard className="item-2"
                name="Danyal Shahroz"
                photoLink={advisorArr[2]}
                role="Senior Advisor"
                interest1="Hiking"
                interest2="Traveling"
                interest3="Making Music"
                linkedin="https://www.linkedin.com/in/danyalshahroz/"
            />
        </CardContainer>
    </>
)

export default AdvisorCards