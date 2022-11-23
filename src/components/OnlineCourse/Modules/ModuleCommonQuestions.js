import React from 'react'
import styled from 'styled-components'
import ModuleCommonQuestionsMapper from './ModuleCommonQuestionsMapper'


const Container = styled.div`
    background-color: #214667;
    border-radius: 10px;
    overflow-y:auto;
    height:400px;
    width:850px;
    padding:20px;
    flex-grow:75;
    /* width */
    ::-webkit-scrollbar {
        width: 7px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        opacity:100%;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: white;
        width: 3px;
        border-radius: 4px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        filter: contrast(80%);
    }
`

const Title = styled.h1`
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 35px;
    color: white;
`

const Line = styled.hr`
    height:4px;
    border-width: 0px;
    background-color: white;
`

const QuestionsContainer = styled.div`
    padding:10px;

`

const ModuleCommonQuestions = (props) => {
  return (
    <Container>
        <Title>Common Questions</Title>
        <Line/>
        <QuestionsContainer>
            <ModuleCommonQuestionsMapper
                module_common_questions={props.module_common_questions}
            />
        </QuestionsContainer>
    </Container>
  )
}

export default ModuleCommonQuestions