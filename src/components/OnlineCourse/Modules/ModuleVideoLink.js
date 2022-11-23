import React from 'react'
import styled from "styled-components"


const ModuleVideoLinkButton = styled.button`
    background-color:transparent;
    border:none;
    cursor:pointer;
    overflow:hidden;
    outline:none;
    display:flex;

    :hover{
        opacity:0.6;
    }
`

const ModuleVideoLinkText = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    word-spacing: 2px;
    text-align: left;
    padding: 10px 3px;
    overflow:auto;
`



const ModuleVideoLink = (props) => {
  return (
    <ModuleVideoLinkButton 
        onClick={() => props.set_cur_video(props.video_id)} 
    >
        <img 
            src={props.video_id===props.cur_video ? 
                require("../../../images/online_course/play_button_blue.png") : 
                require("../../../images/online_course/play_button_white.png")} 
            alt='video icon' 
            height='35px'
        ></img>
        
        <ModuleVideoLinkText 
            style={props.video_id===props.cur_video ? {color:'#5A9BFD'} : {color:'white'}   
        }>
            {props.video_name}
        </ModuleVideoLinkText>
    </ModuleVideoLinkButton>
  )
}

export default ModuleVideoLink