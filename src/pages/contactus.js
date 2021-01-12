import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/PageBanner"
import ContactUsContent from "../components/ContactUs/ContactUsContent"
import { Helmet } from "react-helmet"


const ContactUsPage = () => (
  <>
    <Helmet>
      <title>Contact Us | Big Data at Berkeley</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Questions? Sign up for our email list and we will get back to you!"/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC"/>
    </Helmet>
    <Layout>
      <PageBanner title="Contact Us" description="we’d love to hear from you"/>
      <ContactUsContent/>
    </Layout>
  </>
)

export default ContactUsPage
