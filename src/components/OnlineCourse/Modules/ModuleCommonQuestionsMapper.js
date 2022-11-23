import React from 'react'
import ModuleCommonQuestion from './ModuleCommonQuestion'

const ModuleCommonQuestionsMapper = (props) => {
  return (
    props.module_common_questions.map((question) => 
                <ModuleCommonQuestion
                            question={question}
                        />
            
            )
  )
}

export default ModuleCommonQuestionsMapper