import React from "react"
import { Helmet } from "react-helmet"
import MaterialsContent from "../../components/OnlineCourse/Materials/MaterialsContent"
import OCNavbar from "../../components/OnlineCourse/OCNavbar/OCNavbar"

const MaterialsPage = () => (
  <>
    <Helmet>
      <title>Materials | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Apply to help educate high school students on data science or complete a data consulting project."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC"/>
    </Helmet>
    <>
      <OCNavbar/>
      <MaterialsContent/>
    </>
  </>
)

export default MaterialsPage
