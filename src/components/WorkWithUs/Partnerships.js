import React from "react"
import styled from "styled-components"
import Card from "../CardWithLink"
import SectionTitle from "../BigSectionTitle"
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
            <a href='mailto:bigdata.berkeley@gmail.com' target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                 <Card className="item-0"
                    title="Consulting Project"
                    icon={icon1}
                    description={<>We will provide industry-level data consulting services for your organization. Our team of data 
                    scientists is excited to work closely with clients to craft and and visualize <b>data-based solutions.</b> For 
                    project requests, email us and will get back to you!</>}
                />
            </a>
            <a href='https://drive.google.com/file/d/1-STbnfcWA_Cpky_IaAjWAuZhDY0If5oT/view?usp=sharing' rel="noreferrer" target="_blank" style={{textDecoration: "none"}}>
                <Card className="item-1"
                    title="Sponsorships"
                    icon={icon2}
                    description={<>Sponsors allow us to spread our message through helping expand our Big Data Bootcamp 
                    to students in low-income communities. For sponsorship requests, check out our <b>corporate 
                    sponsorship package</b> attached and email us!</>}
                />
            </a>
        </CardContainer>
    </>
)

export default PartnershipSection