import React, { useState, useRef, useEffect, scrollIntoView } from "react"
import styled from "styled-components"
import Card from "./ModuleCard"

const modules = [
    {label: 0,
    title: "Setting Up",
    description: "Follow a how-to guide on setting up your environment for the course.",
    link: "/"
   },
   {label: 1, 
   title: "What is Data Science?",
   description: "Breaks down the fundamentals of data science, what it’s used for, and why it is important.",
   link: "/"
   },
   {label: 2, 
   title: "Python & NumPy",
   description: "Introduces basic Python and NumPy concepts, and dives into the conceptual idea of Python libraries.",
   link: "/"
   },
   {label: 3,
   title: "Pandas",
   description: "Covers the basics of the Pandas library, the most fundamental tool in any data scientist’s toolbox.",
   link: "/"
   },
   {label: 4,
   title: "Data Visualizations",
   description: "Dives into how to use the Seaborn and Matplotlib libraries to create beautiful and effective data visualizations!",
   link: "/"
   },
   {label: 5,
   title: "The Data Science Life Cycle",
   description: "Covers the steps of the data science life cycle, including exploratory data analysis and the data cleaning process.",
   link: "/"
   },
   {label: 6,
   title: "Intro to Machine Learning",
   description: "Introduces the growing  applications of Machine Learning, and covers how to build basic models.",
   link: "/"
   },
   {label: 7,
   title: "Statistics in Data Science",
   description: "Provides a review on probability and hypothesis testing, and demonstrates how to use them to your advantage.",
   link: "/"
   },
   {label: 8,
   title: "SQL",
   description: "Dives into how to use SQL to create tables and query databases.",
   link: "/"
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