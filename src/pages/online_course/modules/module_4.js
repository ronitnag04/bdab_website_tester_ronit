import React from "react"
import { Helmet } from "react-helmet"
import VideoEmbed from "../../../components/OnlineCourse/Modules/VideoEmbed"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const Module4Page = () => (
  <>
    <Helmet>
      <title>Module 4 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 4 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <VideoEmbed
            label="4"
            title="Data Visualizations"
            lesson_vid_link="https://www.youtube.com/embed/X3paOmcrTjQ"
            slides_link="https://docs.google.com/presentation/d/14MKfYXxXO6hvX7hlxk495anqN9Cm4RJfMy1vigshWO4/edit?usp=sharing"
            notebook_link="/"
        />
    </>
  </>
)

export default Module4Page
