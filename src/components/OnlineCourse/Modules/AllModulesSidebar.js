import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.div`
    height:100%;
    position:absolute;
    z-index: 5;
    top: 10%;
    left: 0;
    transition: 0.5s;
    background-color: #214667;
    overflow: hidden;

    a{
      text-decoration: none;
      display: block;
      transition: 0.3s;
    }

`

const LinkTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    color: white;
    padding-top: 30px;
    padding-left:20px;
    padding-right:20px;
	  text-decoration: none;
    font-weight:500;
    overflow-wrap: break-word;
`

const SidebarImg = styled.img`
  height:20vh;
  position:fixed;
  top: 15%;
  z-index: 5;
  transition: 0.5s;

  :hover{
    filter:contrast(2);
  }

`

const SidebarTab = ({setShowSidebar, showSidebar}) =>{
  return(
    <div>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        style={{
          backgroundColor:'transparent',
          border:'none',
          cursor:'pointer',
          outline:'none',}}
          >
          <SidebarImg 
            src={require('../../../images/online_course/sidebar_tab.png')}
            style={showSidebar ? {left:'20vw'} : {left:'0vw'}}>
          </SidebarImg>
      </button>
    </div>
    
  )
}


const ModuleLink = ({moduleNum, title}) => {
  return(
    <a href={`https://bd.berkeley.edu/online_course/modules/module_${moduleNum}`}>
      <LinkTitle>Module {moduleNum}: {title}</LinkTitle>
    </a>
  )
}

const AllModulesSidebar = (props) => {
  return (
    <>
        <SidebarContainer
          style={props.showSidebar === true ? {width:'20vw'} : {width:'0vw'}}
        >
          <ModuleLink 
              moduleNum= {0}
              title='Setting Up'
              isCurrent={false}
          />
          <ModuleLink 
              moduleNum= {1}
              title='What is Data Science'
              isCurrent={false}
          />
          <ModuleLink 
              moduleNum= {2}
              title='Python & Numpy'
              isCurrent={true}
          />
          <ModuleLink 
              moduleNum= {3}
              title='Pandas'
              isCurrent={false}
          />
          <ModuleLink 
              moduleNum= {4}
              title='Data Visualizations'
              isCurrent={false}
          />
          <ModuleLink 
              moduleNum= {5}
              title='The Data Science Life Cycle'
              isCurrent={false}
          />
          
          <ModuleLink 
              moduleNum= {6}
              title='Intro to Machine Learning'
              isCurrent={false}
          />
          <ModuleLink 
              moduleNum= {7}
              title='Statistics in Data Science'
              isCurrent={false}
          />
          <ModuleLink 
              moduleNum= {8}
              title='SQL'
              isCurrent={false}
          />
        </SidebarContainer>
        <SidebarTab
          setShowSidebar={props.setShowSidebar}
          showSidebar={props.showSidebar}
        />
      
    
    
      
    </>    
  )
}

export default AllModulesSidebar