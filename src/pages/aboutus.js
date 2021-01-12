import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/PageBanner"
import AboutUsContent from "../components/AboutUs/AboutUsContent"
import { Helmet } from "react-helmet"


const AboutUsPage = () => (
  <>
    <Helmet>
      <title>About Us | Big Data at Berkeley</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Founded in 2019, Big Data at Berkeley is the premier data consulting and data science education organization on the UC Berkeley campus."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC"/>
    </Helmet>
    <Layout>
      <PageBanner title="About Us" description="pioneering data science education and consulting"/>
      <AboutUsContent/>
    </Layout>
  </>
)

export default AboutUsPage

