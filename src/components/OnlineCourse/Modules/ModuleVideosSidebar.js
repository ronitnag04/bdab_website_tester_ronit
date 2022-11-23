import React from 'react'
import styled from 'styled-components'
import { render } from 'react-dom'
import ModuleVideoLink from './ModuleVideoLink'
import ModuleVidoesLinksMapper from './ModuleVidoesLinksMapper'


const ModuleVideosSidebarContainer = styled.div`
    margin-top:5px;
    flex-grow:25;
    height:100%;
`

const ModuleWhiteBar = styled.hr`
    background-color: white;
    height: 3px;

`


const ModuleVideosSidebar = (props) => {
  return (
    <ModuleVideosSidebarContainer>
        <ModuleWhiteBar/>
            <ModuleVidoesLinksMapper
                module_videos_links = {props.module_videos_links}
                cur_video = {props.cur_video}
                set_cur_video = {props.set_cur_video}
            />

        <ModuleWhiteBar/>
    </ModuleVideosSidebarContainer>
  )
}

export default ModuleVideosSidebar