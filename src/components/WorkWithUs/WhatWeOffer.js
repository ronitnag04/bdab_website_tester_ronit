import React from "react"
import styled from "styled-components"
import Card from "../CardWithoutLink"
import SectionTitle from "../SectionTitle"
import icon1 from "../../images/work_with_us/what_we_offer/service_1.png"
import icon2 from "../../images/work_with_us/what_we_offer/service_2.png"
import icon3 from "../../images/work_with_us/what_we_offer/service_3.png"
import icon4 from "../../images/work_with_us/what_we_offer/service_4.png"

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

const WhatWeOfferSection = () => (
    <>
        <SectionTitle title="What We Offer"></SectionTitle>
        <CardContainer>
            <Card className="item-0"
                title="Deep Learning"
                icon={icon1}
                description={<>Using <b>computer vision</b> techniques we do more with our clients’ photographs and videos by 
                engineering models that automate human perception of our clients’ visual data.</>}
            />
            <Card className="item-1"
                title="Artificial Intelligence"
                icon={icon2}
                description={<>By deciphering clients’ text data through sentiment analysis and other <b>NLP</b> techniques, we 
                uncover trends within the data that help our clients’ learn more about their users. </>}
            />
            <Card className="item-2"
                title="Machine Learning"
                icon={icon3}
                description={<>We use state-of-the-art <b>ML</b> techniques to develop models that allow our clients to gain insights 
                into the future of their business and capitalize on these opportunities.</>}
            />
            <Card className="item-3"
                title="Data Analysis & Visualization"
                icon={icon4}
                description={<>Using our clients’ data, we uncover and highlight the stories buried within it to develop 
                recommendations that allow our clients to do more for their businesses.</>}
            />
        </CardContainer>
    </>
)

export default WhatWeOfferSection