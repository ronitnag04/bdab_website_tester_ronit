import React from "react"
import { Helmet } from "react-helmet"
import VideoEmbed from "../../../components/OnlineCourse/Modules/VideoEmbed"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const Module2Page = () => (
  <>
    <Helmet>
      <title>Module 2 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 2 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <VideoEmbed
            label="2"
            title="Python & NumPy"
            lesson_vid_link="https://www.youtube.com/embed/X3paOmcrTjQ"
            slides_link="https://docs.google.com/presentation/d/1yW2RcJewoqPzFAsNyDyXKxUY3kiaP4m64z5uPxcLjFI/edit?usp=sharing"
            assignment_notebook_link="https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-2-9e173e50-6ab0-48b5-99a8-70e6bd3491e7/notebook/M2%20Assignment%20Notebook-b4cc8830c1ca473a84b731e12b7d4ee0"
            lesson_notebook_link="https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-2-9e173e50-6ab0-48b5-99a8-70e6bd3491e7/notebook/M2%20Lesson%20Notebook-4bad20ec8db44534b7c25638921fc8ff"
        />
    </>
  </>
)

export default Module2Page
