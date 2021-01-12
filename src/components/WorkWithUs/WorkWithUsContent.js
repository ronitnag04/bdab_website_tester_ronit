import React from "react"
import styled from "styled-components"
// import CurrentClients from "./CurrentClients"
import Partnerships from "./Partnerships"
import WhatWeOffer from "./WhatWeOffer"
import PastClients from "./PastClients"
// import ClientTestimonials from "./ClientTestimonials"
import ProjectStatsBar from "./ProjectStatsBar"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const WorkWithUsContent = () => {
    return (
        <Container>
            {/* <CurrentClients/> */}
            <ProjectStatsBar/>
            <Partnerships/>
            <WhatWeOffer/>
            {/* <ClientTestimonials/> */}
            <PastClients/>
        </Container>
    )
}

export default WorkWithUsContent