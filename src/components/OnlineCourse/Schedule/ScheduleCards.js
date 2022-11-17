import React, { useState, useRef, useEffect, scrollIntoView } from "react"
import styled from "styled-components"
import Card from "./ModuleCard"

const modules = [
    {label: 0,
    title: "Setting Up",
    description: "This module covers setting up your environment and tools for the course",
    link: "/online_course/modules/module_0/"
   },
   {label: 1, 
   title: "What is Data Science?",
   description: "This module covers the fundamentals of data science and its applications in today's world",
   link: "/online_course/modules/module_1/"
   },
   {label: 2, 
   title: "Python & NumPy",
   description: "This module covers foundational Python and NumPy concepts for data science.",
   link: "/online_course/modules/module_2/"
   },
   {label: 3,
   title: "Pandas",
   description: "This module covers the basics of the Pandas library, a fundamental tool in any data scientist's toolbox.",
   link: "/online_course/modules/module_3/"
   },
   {label: 4,
   title: "Data Visualizations",
   description: "This module covers how to use the Seaborn and Matplotlib libraries to create beautiful and effective data visualizations.",
   link: "/online_course/modules/module_4/"
   },
   {label: 5,
   title: "The Data Science Life Cycle",
   description: "This module covers the stages of the data science life cycle, a comprehensive methodology for tackling problems with data science.",
   link: "/online_course/modules/module_5/"
   },
   {label: 6,
   title: "Intro to Machine Learning",
   description: "This module covers how to build machine learning models and utilize them to solve problems.",
   link: "/online_course/modules/module_6/"
   },
   {label: 7,
   title: "Statistics in Data Science",
   description: "This module covers probability and hypothesis testing, and how data scientists use these tools in practice.",
   link: "/online_course/modules/module_7/"
   },
   {label: 8,
   title: "SQL",
   description: "This module covers the SQL programming language and how to create tables and query databases for powerful data manipulation.",
   link: "/online_course/modules/module_8/"
   }
]

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px;
`

const ScheduleCards = () => {
    const [chosen, setChosen] = useState(0); // default highlight module 0

    return (
        <CardContainer>
            {modules.map((details) =>
                <>
                    <Card
                        label={details.label}
                        title={details.title}
                        description={<>{details.description}</>}

                        // button programming
                        link={details.link}
                        active={details.label === chosen}
                        onClick={() => setChosen(details.label)}
                        selected={chosen}
                    />
                </>
            )}
        </CardContainer>
    )
}

export default ScheduleCards