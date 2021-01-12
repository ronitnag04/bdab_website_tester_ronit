import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/PageBanner"
import WorkWithUsContent from "../components/WorkWithUs/WorkWithUsContent"
import { Helmet } from "react-helmet"


const WorkWithUsPage = () => (
  <>
    <Helmet>
      <title>Work With Us | Big Data at Berkeley</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Learn more about Big Data's past clients and how we can help your company make better, data-driven decisions."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC"/>
    </Helmet>
    <Layout>
      <PageBanner title="Work With Us" description="data science industry consulting and services"/>
      <WorkWithUsContent/>
    </Layout>
  </>
)

export default WorkWithUsPage
