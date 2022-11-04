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
            notebook_link="/"
        />
    </>
  </>
)

export default Module8Page
