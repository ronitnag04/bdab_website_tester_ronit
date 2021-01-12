import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/PageBanner"
import ApplyContent from "../components/Apply/ApplyContent"
import { Helmet } from "react-helmet"


const ApplyPage = () => (
  <>
    <Helmet>
      <title>Apply | Big Data at Berkeley</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Apply to help educate high school students on data science or complete a data consulting project."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC"/>
    </Helmet>
    <Layout>
      <PageBanner title="Apply" description="join our family"/>
      <ApplyContent/>
    </Layout>
  </>
)

export default ApplyPage
