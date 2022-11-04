import React from "react"
import { Helmet } from "react-helmet"
import VideoEmbed from "../../../components/OnlineCourse/Modules/VideoEmbed"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const Module7Page = () => (
  <>
    <Helmet>
      <title>Module 7 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 7 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <VideoEmbed
            label="7"
            title="Statistics in Data Science"
            lesson_vid_link="https://www.youtube.com/embed/X3paOmcrTjQ"
            slides_link="https://docs.google.com/presentation/d/18Ivy7JVAa05gRXTS8tAaobN4_n8_44T0Og_SpRMqUZs/edit?usp=sharing"
            notebook_link="/"
        />
    </>
  </>
)

export default Module7Page
