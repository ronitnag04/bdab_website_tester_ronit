import React from "react"
import styled from "styled-components"
import Card from "../CardWithDecor"
import SectionTitle from "../BigSectionTitle"
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
                description={<>Quirky. Weird. Passionate.  We’re not just a professional club, we’re a family. 
                We embrace our wacky and creative sides—that’s where the best ideas are born!</>}
            />
            <Card className="item-1"
                title="Dream Big"
                icon={icon2}
                description={<>Why stick to the status-quo when you can think bigger? Serving the student, 
                business, and campus communities has pushed us to always ask “What next?”</>}
            />
            <Card className="item-2"
                title="Always Learning"
                icon={icon3}
                description={<>Everyone has something to teach, & nobody knows everything. We constantly pursue our 
                interests while growing professionally and socially.</>}
            />
            <Card className="item-3"
                title="Big Data For All"
                icon={icon4}
                description={<>Taking initiative, following through and holding each other accountable. Collaboration 
                is the glue that holds our family together, with everyone doing their part.</>}
            />
        </CardContainer>
    </>
)

export default ClubValuesSection