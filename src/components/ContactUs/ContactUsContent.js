import React from "react"
import styled from "styled-components"
import Description from "../Description"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px;
`

const ContactUsContent = () => {
    return (
        <Container>
            <Description
                description={<>Have any questions about recruitment, infosessions, or general membership? 
                Send us an email at <b>bigdata.berkeley@gmail.com</b> and we will get back to you!</>}
            />
            <iframe class="form" src="https://docs.google.com/forms/d/e/1FAIpQLScLbviWBJP9bxQuae3_oWxx8knoaBt2XB_NMOPsCqLddpjBMg/viewform?embedded=true" 
            width="80%" height="1710" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" style={{margin: "30px"}}>Loading…</iframe>
        </Container>
    )
}

export default ContactUsContent