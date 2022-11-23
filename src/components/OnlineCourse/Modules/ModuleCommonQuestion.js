import React from 'react'
import styled from 'styled-components'


const Question = styled.h1`
    font-size:20px;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 2px;
    font-weight: 500;
    color: white;
    margin-bottom:5px;
`

const Answer = styled.p`
    font-size: 15px;
    color: #C0C0C1;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 2px;
    font-weight: 500;
`

const Instructor = styled.h1`
    font-size: 15px;
    font-family: 'Bebas Neue', cursive;
    justify-self: right;
    text-align: right;
    color: #C0C0C1;
    letter-spacing: 2px;
    font-weight: 500;
`

const QuestionContainer = styled.div`
    margin-bottom:10px;
    

`

const ModuleCommonQuestion = ({question}) => {
  return (
    <QuestionContainer>
        <Question>{question['question']}</Question>
        <Answer>{question['answer']}</Answer>
        <Instructor>- {question['instructor-name']}</Instructor>
    
    </QuestionContainer>
    
  )
}

export default ModuleCommonQuestion