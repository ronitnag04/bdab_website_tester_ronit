import React from "react"
import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import Description from "../Description"

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    .item-0 { order: 0; }
    .item-1 { order: 1; }
`

const Photo = styled.img`
    width: 550px;
    margin: 50px 50px 50px 50px;
    border-radius: 25px;

    @media (max-width: 700px) {
        width: 450px;
    }

    @media (max-width: 500px) {
        width: 350px;
    }

    @media (max-width: 450px) {
        margin: 20px 10px 10px 10px;
        width: 300px;
    }

    @media (max-width: 300px) {
        width: 220px;
    }
`

const VisionSection = () => (
    <>
        <SectionTitle title="Our Vision"></SectionTitle>
        <DescriptionContainer>
            <Description className="item-0"
                description="We are a student organization driven by the power of data to impact our community for the better. 
                We seek to utilize our diverse experiences in the field of technology to prepare the next generation of data 
                scientists and thinkers, as well as provide them with the opportunities to learn and grow."
            />
        </DescriptionContainer>
    </>
)

export default VisionSection