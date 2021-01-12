import React from "react"
import styled from "styled-components"
import Card from "../CardWithoutLink"
import SectionTitle from "../SectionTitle"
import icon1 from "../../images/about_us/club_values/club_value_1.png"
import icon2 from "../../images/about_us/club_values/club_value_2.png"
import icon3 from "../../images/about_us/club_values/club_value_3.png"
import icon4 from "../../images/about_us/club_values/club_value_4.png"

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .item-0 { order: 0; }
    .item-1 { order: 1; }
    .item-2 { order: 2; }
    .item-3 { order: 3; }
`

const ClubValuesSection = () => (
    <>
        <SectionTitle title="Our Club Values"></SectionTitle>
        <CardContainer>
            <Card className="item-0"
                title="Big Data Energy"
                icon={icon1}
                description={<>We embrace our wacky and creative sides because that’s where all the best ideas are born. 
                After all, why stick to the status-quo when you can think bigger?</>}
            />
            <Card className="item-1"
                title="Big Data For All"
                icon={icon2}
                description={<>There are no hierarchies among us, just as there is no “I” in “team”! We’re a family and 
                that means that we uplift each other.</>}
            />
            <Card className="item-2"
                title="Big Data Growth"
                icon={icon3}
                description={<>We strive to create an environment where our members are free to pursue their interests and 
                grow, socially and professionally.</>}
            />
            <Card className="item-3"
                title="Big Data Communication"
                icon={icon4}
                description={<>Nobody wants to be left in the dark. Frequent communication is the glue that holds our 
                organization together.</>}
            />
        </CardContainer>
    </>
)

export default ClubValuesSection