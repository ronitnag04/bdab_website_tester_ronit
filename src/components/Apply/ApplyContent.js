import React from "react"
import styled from "styled-components"
import ApplyFAQ from "./ApplyFAQ"
import BerkeleyStudents from "./BerkeleyStudents"
import HighSchoolStudents from "./HighSchoolStudents"
import PhotoCarousel from "./PhotoCarousel"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const ApplyContent = () => {
    return (
        <Container>
            <BerkeleyStudents/>
            <HighSchoolStudents/>
            <PhotoCarousel/>
            <ApplyFAQ/>
        </Container>
    )
}

export default ApplyContent