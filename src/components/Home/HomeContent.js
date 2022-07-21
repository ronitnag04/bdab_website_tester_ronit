import React from "react"
import styled from "styled-components"
import SectionTitle from "../BigSectionTitle"
import Card from "./HomeCard"
import icon1 from "../../images/home/for_berkeley_students.png"
import icon2 from "../../images/projects.png"
import icon3 from "../../images/education.png"

const Container = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .item-0 { 
        order: 0; 

        :hover {
            background-color: #ededee;
            border: 40px solid #ededee;
            border-top: 55px solid #ededee;
            border-bottom: 55px solid #ededee;
        }
    }
    .item-1 { order: 1; }
    .item-2 { order: 2; }
`

const HomeContent = () => {
    return (
        <>
            <SectionTitle title="What We Do"></SectionTitle>
            <Container>
                <Card className="item-0"
                    title="For UC Berkeley Students"
                    icon={icon1}
                    link="/aboutus"
                    description={<>Serve our community through data science, forging <b>deep relationships and building your 
                    career</b> with the top data scientists of Berkeley! Click here learn more about BDAB!</>}
                />
                <Card className="item-1"
                    title="For Organizations"
                    icon={icon2}
                    link="/workwithus"
                    description={<>We provide comprehensive data consulting services, utilizing <b>state-of-the-art</b> technologies 
                    to deliver value to your organization. Click to learn how we can work together!</>}
                />
                <Card className="item-2"
                    title="For General Students"
                    icon={icon3}
                    link="/courses"
                    description={<>The Big Data Bootcamp and our Data Science Demystified intro course provide a <b>fun and foundational</b> data 
                    science education for you! Click to view our courses!</>}
                />
            </Container>
        </>
    )
}

export default HomeContent
