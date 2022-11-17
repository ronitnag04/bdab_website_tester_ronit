import React from "react"
import { Helmet } from "react-helmet"
import VideoEmbed from "../../../components/OnlineCourse/Modules/VideoEmbed"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const Module3Page = () => (
  <>
    <Helmet>
      <title>Module 3 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 3 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <VideoEmbed
            label="3"
            title="Pandas"
            lesson_vid_link="https://www.youtube.com/embed/X3paOmcrTjQ"
            slides_link="https://docs.google.com/presentation/d/13jXMHlaS83nVwREXHbFRp7UJYMEKF3xySpFOiHiSH7I/edit?usp=sharing"
            assignment_notebook_link="https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-3-e301d0ea-b5a7-47b0-9029-0d8d16be135b/notebook/M3%20Assignment%20Notebook-d778beb661884a7f9c5057d3a60a9ce8"
            lesson_notebook_link="https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-3-e301d0ea-b5a7-47b0-9029-0d8d16be135b/notebook/M3%20Lesson%20Notebook-61d76424637c478fbe8c453c79850633"
        />
    </>
  </>
)

export default Module3Page
