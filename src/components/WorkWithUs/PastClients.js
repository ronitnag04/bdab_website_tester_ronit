import React from "react"
import styled from "styled-components"
import SectionTitle from "../BigSectionTitle"
import {pastClients} from './ClientLogos';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 50px;
    margin-bottom: 100px;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 220px;
    height: 150px;
    margin: 20px;

    @media (max-width: 900px) {
        margin-right: 60px;
    }
`

const Logo = styled.img`
    margin: 20px;
`

const PastClients = () => (
    <>
        <SectionTitle title="Past Clients"></SectionTitle>
        <Container>
            {pastClients.map((client) =>
                <LogoContainer>
                    <a href={client.link} rel="noreferrer" target="_blank">
                        <Logo src={client.logo}/>
                    </a>
                </LogoContainer>
            )}
        </Container>
    </>
)

export default PastClients