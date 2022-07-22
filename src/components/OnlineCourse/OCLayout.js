import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navbar from "./OCNavbar/OCNavbar"
import VideoEmbed from "./Modules/VideoEmbed"

const Container = styled.div`
    min-height: 100%;
`

const OCLayout = (props) => {
  return (
    <Container>
      <Navbar/>
      <VideoEmbed {...props} />
    </Container>
  )
}

OCLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default OCLayout
