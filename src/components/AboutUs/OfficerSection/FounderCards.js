import React from "react"
import styled from "styled-components"
import FounderCard from "./OfficerSectionComponents/FounderCard"
import {founderArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const AdvisorCards = () => (
    <>
        <CardContainer>
            <FounderCard
                name="Melissa Wong"
                photoLink={founderArr[0]}
                role="Senior Advisor"
                linkedin="https://www.linkedin.com/in/melissa-r-wong/"
            />
            <FounderCard
                name="Smruthi Balajee"
                photoLink={founderArr[1]}
                role="Senior Advisor"
                linkedin="http://www.linkedin.com/in/smruthibalajee"
            />
            <FounderCard
                name="Smita Sikaria"
                photoLink={founderArr[2]}
                role="External Vice President"
                linkedin="https://www.linkedin.com/in/smita-sikaria/"
            />
            <FounderCard
                name="Elliot Larson"
                photoLink={founderArr[3]}
                role="Internal Vice President"
                linkedin="https://www.linkedin.com/in/elliotlarson99/"
            />
            <FounderCard
                name="Ronak Laddha"
                photoLink={founderArr[4]}
                role="VP of Finance"
                linkedin="https://www.linkedin.com/in/ronak-laddha/"
            />
            <FounderCard
                name="Aurum Kathuria"
                photoLink={founderArr[5]}
                role="VP of Consulting"
                linkedin="http://www.linkedin.com/in/heyaurum"
            />
            <FounderCard
                name="Danyal Shahroz"
                photoLink={founderArr[6]}
                role="VP of Education"
                linkedin="https://www.linkedin.com/in/danyalshahroz/"
            />
        </CardContainer>
    </>
)

export default AdvisorCards