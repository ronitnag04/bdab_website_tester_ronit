import React, { useState, useRef, useEffect, scrollIntoView } from "react"
import styled from "styled-components"
import Card from "./MaterialsCard"

const modules_materials = [
    {label: 0,
    title: "Setting Up",
    lesson_vid_link: "/",
    slides_link: "/",
    notebook_link: "/"
   },
   {label: 1, 
   title: "What is Data Science?",
   lesson_vid_link: "/",
   slides_link: "/",
   notebook_link: "/"
   },
   {label: 2, 
   title: "Python & NumPy",
   lesson_vid_link: "/",
   slides_link: "/",
   notebook_link: "/"
   },
   {label: 3,
   title: "Pandas",
   lesson_vid_link: "/",
   slides_link: "/",
   notebook_link: "/"
   },
   {label: 4,
   title: "Data Visualizations",
   lesson_vid_link: "/",
   slides_link: "/",
   notebook_link: "/"
   },
   {label: 5,
   title: "The Data Science Life Cycle",
   lesson_vid_link: "/",
   slides_link: "/",
   notebook_link: "/"
   },
   {label: 6,
   title: "Intro to Machine Learning",
   lesson_vid_link: "/",
   slides_link: "/",
   notebook_link: "/"
   },
   {label: 7,
   title: "Statistics in Data Science",
   lesson_vid_link: "/",
   slides_link: "/",
   notebook_link: "/"
   },
   {label: 8,
   title: "SQL",
   lesson_vid_link: "/",
   slides_link: "/",
   notebook_link: "/"
   }
]

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px;
`

const MaterialsCards = () => {
    return (
        <CardContainer>
            {modules_materials.map((details) =>
                <>
                    <Card
                        label={details.label}
                        title={details.title}
                        lesson_vid_link={details.lesson_vid_link}
                        slides_link={details.slides_link}
                        notebook_link={details.notebook_link}
                    />
                </>
            )}
        </CardContainer>
    )
}

export default MaterialsCards