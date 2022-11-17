import React, { useState, useRef, useEffect, scrollIntoView } from "react"
import styled from "styled-components"
import Card from "./MaterialsCard"

const modules_materials = [
    {label: 0,
    title: "Setting Up",
    lesson_vid_link: "/",
    slides_link: "https://docs.google.com/presentation/d/1qCYT2syb0oA2Kn9i1K_He3L62TDUwon-AxSElCIlS1o/edit?usp=sharing",
    assignment_notebook_link: "/",
    lesson_notebook_link: "/"
   },
   {label: 1, 
   title: "What is Data Science?",
   lesson_vid_link: "/",
   slides_link: "/",
   assignment_notebook_link: "/",
   lesson_notebook_link: "/"
   },
   {label: 2, 
   title: "Python & NumPy",
   lesson_vid_link: "/",
   slides_link: "https://docs.google.com/presentation/d/1yW2RcJewoqPzFAsNyDyXKxUY3kiaP4m64z5uPxcLjFI/edit?usp=sharing",
   assignment_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-2-9e173e50-6ab0-48b5-99a8-70e6bd3491e7/notebook/M2%20Assignment%20Notebook-b4cc8830c1ca473a84b731e12b7d4ee0",
   lesson_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-2-9e173e50-6ab0-48b5-99a8-70e6bd3491e7/notebook/M2%20Lesson%20Notebook-4bad20ec8db44534b7c25638921fc8ff"
   },
   {label: 3,
   title: "Pandas",
   lesson_vid_link: "/",
   slides_link: "https://docs.google.com/presentation/d/13jXMHlaS83nVwREXHbFRp7UJYMEKF3xySpFOiHiSH7I/edit?usp=sharing",
   assignment_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-3-e301d0ea-b5a7-47b0-9029-0d8d16be135b/notebook/M3%20Assignment%20Notebook-d778beb661884a7f9c5057d3a60a9ce8",
   lesson_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-3-e301d0ea-b5a7-47b0-9029-0d8d16be135b/notebook/M3%20Lesson%20Notebook-61d76424637c478fbe8c453c79850633"
   },
   {label: 4,
   title: "Data Visualizations",
   lesson_vid_link: "/",
   slides_link: "https://docs.google.com/presentation/d/14MKfYXxXO6hvX7hlxk495anqN9Cm4RJfMy1vigshWO4/edit?usp=sharing",
   assignment_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-4-3f8db16c-2012-456b-8fef-dc32129ebac2/notebook/Assignment%20Notebook-54b2de47d1904c39a778a63c69ec3fa2",
   lesson_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-4-3f8db16c-2012-456b-8fef-dc32129ebac2/notebook/Lesson%20Notebook-7ae52aa0deab4595b565caf75a129d86"
   },
   {label: 5,
   title: "The Data Science Life Cycle",
   lesson_vid_link: "/",
   slides_link: "https://docs.google.com/presentation/d/1TZTQJNym_QUKgDa3043cX_E5WKou-FsWw_qsjA48TfM/edit?usp=sharing",
   assignment_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-5-6b4771dd-79ac-403b-bea2-1191b59dd0af/notebook/Module%205%20Notebook-3aa749bc92104fe68e0065d30e2d40c2",
   lesson_notebook_link: "/"
   },
   {label: 6,
   title: "Intro to Machine Learning",
   lesson_vid_link: "/",
   slides_link: "https://docs.google.com/presentation/d/1zwpMr25nJZUFyF7sDha7HD8X2rXdNce7KRVZxUfggT8/edit?usp=sharing",
   assignment_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-6-dbe3d75d-e076-4d82-9668-2cacd19d46c5/notebook/Assignment%20Notebook-97edef24f6b54bc2ae40a7bebf3df628",
   lesson_notebook_link: "/"
   },
   {label: 7,
   title: "Statistics in Data Science",
   lesson_vid_link: "/",
   slides_link: "https://docs.google.com/presentation/d/18Ivy7JVAa05gRXTS8tAaobN4_n8_44T0Og_SpRMqUZs/edit?usp=sharing",
   assignment_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-7-9e80cc96-c4f4-45be-af58-54fa17cac36e/notebook/M7%20Assignment%20Notebook-125f25abafe54b69b4dc67b540556ce1",
   lesson_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-7-9e80cc96-c4f4-45be-af58-54fa17cac36e/notebook/M7%20Lesson%20Notebook-db524a19a13c418184a7ff2ef274be87"
   },
   {label: 8,
   title: "SQL",
   lesson_vid_link: "/",
   slides_link: "https://docs.google.com/presentation/d/1GUqJw0tLv_vdmNALugF3iO23OaJfg9DrF_z7ugO0XB0/edit?usp=sharing",
   assignment_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-8-d9f39b76-5781-4af5-b332-419e04cd80b2/notebook/M8%20Assignment%20Notebook-ade4261360fe40d3a0a49a4c30d1bbe2",
   lesson_notebook_link: "https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-8-d9f39b76-5781-4af5-b332-419e04cd80b2/notebook/M8%20Lesson%20Notebook-f6e5f8c0f1e64f34a657f5b9045606f3"
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
                        lesson_notebook_link={details.lesson_notebook_link}
                        assignment_notebook_link={details.assignment_notebook_link}
                    />
                </>
            )}
        </CardContainer>
    )
}

export default MaterialsCards