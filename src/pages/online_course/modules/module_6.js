import React from "react"
import { Helmet } from "react-helmet"
import VideoEmbed from "../../../components/OnlineCourse/Modules/VideoEmbed"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const Module6Page = () => (
  <>
    <Helmet>
      <title>Module 6 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 6 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <VideoEmbed
            label="6"
            title="Intro to Machine Learning"
            lesson_vid_link="https://www.youtube.com/embed/X3paOmcrTjQ"
            slides_link="https://docs.google.com/presentation/d/1zwpMr25nJZUFyF7sDha7HD8X2rXdNce7KRVZxUfggT8/edit?usp=sharing"
            assignment_notebook_link="https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-6-dbe3d75d-e076-4d82-9668-2cacd19d46c5/notebook/Assignment%20Notebook-97edef24f6b54bc2ae40a7bebf3df628"
            lesson_notebook_link="/"
        />
    </>
  </>
)

export default Module6Page
