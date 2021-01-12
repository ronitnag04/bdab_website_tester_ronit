import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/PageBanner"
import CoursesContent from "../components/Courses/CoursesContent"
import { Helmet } from "react-helmet"


const CoursesPage = () => (
  <>
    <Helmet>
      <title>Courses | Big Data at Berkeley</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Our Big Data Bootcamp and new online course are inspired by our mission to provide data science education for all."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC"/>
    </Helmet>
    <Layout>
      <PageBanner title="Courses" description="data science education for all"/>
      <CoursesContent/>
    </Layout>
  </>
)

export default CoursesPage