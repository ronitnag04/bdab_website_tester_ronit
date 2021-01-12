import React from "react"
import styled from "styled-components"
import Card from "../CardWithLink"
import SectionTitle from "../SectionTitle"
import icon1 from "../../images/projects.png"
import icon2 from "../../images/education.png"


const CardContainer = styled.div`
    margin: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .item-0 { order: 0; }
    .item-1 { order: 1; }
`

const PartnershipSection = () => (
    <>
        <SectionTitle title="Partnership Options"></SectionTitle>
        <CardContainer>
            <a href='mailto:bigdata.berkeley@gmail.com' target="_blank">
                 <Card className="item-0"
                    title="Consulting Project"
                    icon={icon1}
                    description={<>We aim to provide data consulting services for your organization. Our team of data 
                    scientists and developers is excited to work closely with clients to ideate, craft, and visualize data-based 
                    solutions. For project requests, email us our VP of Consulting will get back to you.</>}
                />
            </a>
            <a href='https://drive.google.com/file/d/1-STbnfcWA_Cpky_IaAjWAuZhDY0If5oT/view?usp=sharing' rel="noreferrer" target="_blank">
                <Card className="item-1"
                    title="Sponsorships"
                    icon={icon2}
                    description={<>Sponsors allow us to spread our message through helping us expand our Big Data Bootcamp 
                    initiative to students in low-income communities. For sponsorship requests, check out our corporate 
                    sponsorship package attached here, shoot us an email, and we will get back to you!</>}
                />
            </a>
        </CardContainer>
    </>
)

export default PartnershipSection