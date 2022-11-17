import React from "react"
import { Helmet } from "react-helmet"
import VideoEmbed from "../../../components/OnlineCourse/Modules/VideoEmbed"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const Module8Page = () => (
  <>
    <Helmet>
      <title>Module 8 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 8 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <VideoEmbed
            label="8"
            title="SQL"
            lesson_vid_link="https://www.youtube.com/embed/X3paOmcrTjQ"
            slides_link="https://docs.google.com/presentation/d/1GUqJw0tLv_vdmNALugF3iO23OaJfg9DrF_z7ugO0XB0/edit?usp=sharing"
            assignment_notebook_link="https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-8-d9f39b76-5781-4af5-b332-419e04cd80b2/notebook/M8%20Assignment%20Notebook-ade4261360fe40d3a0a49a4c30d1bbe2"
            lesson_notebook_link="https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-8-d9f39b76-5781-4af5-b332-419e04cd80b2/notebook/M8%20Lesson%20Notebook-f6e5f8c0f1e64f34a657f5b9045606f3"
        />
    </>
  </>
)

export default Module8Page
