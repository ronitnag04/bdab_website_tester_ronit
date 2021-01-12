import React from "react"
import styled from "styled-components"
import BootcampSection from "./Bootcamp/BootcampSection"
import OCSection from "./OnlineCourse/OCSection"
import CoursesFAQ from "./CoursesFAQ"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const HR = styled.hr`
    width: 90%;
    margin-top: 50px;
    height: 1px;
`

const CoursesContent = () => {
    return (
        <Container>
            <BootcampSection/>
            <HR/>
            <OCSection/>
            <CoursesFAQ/>
        </Container>
    )
}

export default CoursesContent