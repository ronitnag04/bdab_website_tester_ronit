import React from "react"
import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import Card from "../CardWithLink"
import { Link } from "gatsby"
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
                    description={<>We are looking for <b>driven</b> individuals who are interested in either working on a data consulting project 
                    or helping spread data science education to all! Join a tight-knit community of <b>passionate</b> students who use the power 
                    of data to positively impact their community. Click to learn more!</>}
                />
                <Card className="item-1"
                    title="For Organizations"
                    icon={icon2}
                    link="/workwithus"
                    description={<>We provide comprehensive data consulting services to <b>three</b> organizations every semester. By working with us,
                    you will have access to a full team of qualified data scientists and developers. Click to learn how we can work together!</>}
                />
                <Card className="item-2"
                    title="For General Students"
                    icon={icon3}
                    link="/courses"
                    description={<>We offer <b>two</b> data science courses to students. Our initiatives, the Big Data Bootcamp and Intro to Data Science Online 
                    Course, aim to provide a data science education to those in our community and beyond. Check them out!</>}
                />
            </Container>
        </>
    )
}

export default HomeContent
