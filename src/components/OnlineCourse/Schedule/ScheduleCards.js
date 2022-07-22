import React, { useState, useRef, useEffect, scrollIntoView } from "react"
import styled from "styled-components"
import Card from "./ModuleCard"

const modules = [
    {label: 0,
    title: "Setting Up",
    description: "Follow a how-to guide on setting up your environment for the course.",
    link: "/online_course/modules/module_0/"
   },
   {label: 1, 
   title: "What is Data Science?",
   description: "Breaks down the fundamentals of data science, what it’s used for, and why it is important.",
   link: "/online_course/modules/module_1/"
   },
   {label: 2, 
   title: "Python & NumPy",
   description: "Introduces basic Python and NumPy concepts, and dives into the conceptual idea of Python libraries.",
   link: "/online_course/modules/module_2/"
   },
   {label: 3,
   title: "Pandas",
   description: "Covers the basics of the Pandas library, the most fundamental tool in any data scientist’s toolbox.",
   link: "/online_course/modules/module_3/"
   },
   {label: 4,
   title: "Data Visualizations",
   description: "Dives into how to use the Seaborn and Matplotlib libraries to create beautiful and effective data visualizations!",
   link: "/online_course/modules/module_4/"
   },
   {label: 5,
   title: "The Data Science Life Cycle",
   description: "Covers the steps of the data science life cycle, including exploratory data analysis and the data cleaning process.",
   link: "/online_course/modules/module_5/"
   },
   {label: 6,
   title: "Intro to Machine Learning",
   description: "Introduces the growing  applications of Machine Learning, and covers how to build basic models.",
   link: "/online_course/modules/module_6/"
   },
   {label: 7,
   title: "Statistics in Data Science",
   description: "Provides a review on probability and hypothesis testing, and demonstrates how to use them to your advantage.",
   link: "/online_course/modules/module_7/"
   },
   {label: 8,
   title: "SQL",
   description: "Dives into how to use SQL to create tables and query databases.",
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