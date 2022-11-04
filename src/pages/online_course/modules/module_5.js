import React from "react"
import { Helmet } from "react-helmet"
import VideoEmbed from "../../../components/OnlineCourse/Modules/VideoEmbed"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const Module5Page = () => (
  <>
    <Helmet>
      <title>Module 5 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 5 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <VideoEmbed
            label="5"
            title="The Data Science Life Cycle"
            lesson_vid_link="https://www.youtube.com/embed/X3paOmcrTjQ"
            slides_link="https://docs.google.com/presentation/d/1TZTQJNym_QUKgDa3043cX_E5WKou-FsWw_qsjA48TfM/edit?usp=sharing"
            notebook_link="/"
        />
    </>
  </>
)

export default Module5Page
