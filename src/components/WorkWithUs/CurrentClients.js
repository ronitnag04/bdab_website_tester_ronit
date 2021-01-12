import React from "react"
import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import {currentClients} from './ClientLogos';

const Container = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
`

const Logo = styled.img`
    width: 200px;
    margin: 30px;
    margin-bottom: 50px;
`

const CurrentClients = () => (
    <>
        <SectionTitle title="Spring 2021 Clients"></SectionTitle>
        <Container>
            {currentClients.map((client) =>
                <>
                    <a href={client.link} rel="noreferrer" target="_blank">
                        <Logo src={client.logo}/>
                    </a>
                </>
            )}
        </Container>
    </>
)

export default CurrentClients