import React from 'react'
import ModuleResource from './ModuleResource'
import styled from 'styled-components'


const Container = styled.div`
    display:block;
    text-align:center;
    padding-top:10px

`

const ModuleResourcesMapper = (props) => {
    return (
        <Container>
            {
                props.module_resources.map((resource) => 
                <ModuleResource
                            resource={resource}
                />
                )
            }
        </Container>

      )
}

export default ModuleResourcesMapper