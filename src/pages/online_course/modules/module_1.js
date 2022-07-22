import React from "react"
import { Helmet } from "react-helmet"
import VideoEmbed from "../../../components/OnlineCourse/Modules/VideoEmbed"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const Module1Page = () => (
  <>
    <Helmet>
      <title>Module 1 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 1 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <VideoEmbed
            label="1"
            title="What is Data Science?"
            lesson_vid_link="https://www.youtube.com/embed/X3paOmcrTjQ"
            slides_link="/"
            notebook_link="/"
        />
    </>
  </>
)

export default Module1Page
