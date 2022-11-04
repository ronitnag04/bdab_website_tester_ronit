import React from "react"
import { Helmet } from "react-helmet"
import VideoEmbed from "../../../components/OnlineCourse/Modules/VideoEmbed"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const Module0Page = () => (
  <>
    <Helmet>
      <title>Module 0 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 0 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <VideoEmbed
            label="0"
            title="Setting Up"
            lesson_vid_link="https://youtu.be/sEbVMs8ahwk"
            slides_link="https://docs.google.com/presentation/d/1qCYT2syb0oA2Kn9i1K_He3L62TDUwon-AxSElCIlS1o/edit?usp=sharing"
            notebook_link="/"
        />
    </>
  </>
)

export default Module0Page
