import React from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components"

const PlayerContainer = styled.div`
  flex-grow:75;
`

const PlayerWrapper = styled.div`
  position: relative;
  width:100%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

`



const VideoEmbed = (props) => {

  return (
    <PlayerContainer>
        <PlayerWrapper>
            <ReactPlayer className="player"
                url={props.lesson_vid_link}
                controls
                width="850px"
                height="485px"
            />
        </PlayerWrapper>
    </PlayerContainer>
    
  )
}

export default VideoEmbed
