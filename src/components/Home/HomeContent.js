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
                    description={<>We are looking for <b>driven</b> individuals who are interested in either working on a data 
                    science-based consulting project, teaching high school students the fundamentals of data science, or developing 
                    a new, self-paced data science online course. Join a tight knit community of <b>passionate</b> data scientists who 
                    wish to use the power of data to impact their community for the better. Click to learn more!</>}
                />
                <Card className="item-1"
                    title="For Organizations"
                    icon={icon2}
                    link="/workwithus"
                    description={<>We provide data consulting services to three organizations every semester. Our services 
                    range from comprehensive data analysis and constructing <b>machine learning</b> models to 
                    using <b>computer vision</b> and <b>NLP</b> to dive deeper into your data and uncover buried insights. 
                    We provide clients with a full team of qualified data scientists and developers. Click to learn more 
                    about how we can work together!</>}
                />
                <Card className="item-2"
                    title="For General Students"
                    icon={icon3}
                    link="/courses"
                    description={<>We offer two courses both with the goal of providing a data science education to those in our community 
                    and beyond. Our Big Data Bootcamp is made for high school students and is a comprehensive introduction to the field 
                    of data science. Our new Intro to Data Science Online Course is available to those of <b>all ages and locations,</b> and 
                    aims to dive into the fundamentals of data science. Check them out!</>}
                />
            </Container>
        </>
    )
}

export default HomeContent
