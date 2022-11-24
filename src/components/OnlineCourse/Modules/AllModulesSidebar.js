import React from 'react'
import styled from 'styled-components'

const transitionTime = '0.5s'
const openwidth = '20vw'
const closewidth = '0vw'
const z_index = 5 

const SidebarContainer = styled.div`
    height:100%;
    position:absolute;
    z-index: ${z_index};
    top: 10%;
    left: 0;
    transition: ${transitionTime};
    background-color: #214667;
    overflow: hidden;

    a{
      text-decoration: none;
      display: block;
    }
    a:hover{
      -webkit-text-stroke-width: 1px;
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
    overflow:hidden;
`


const SidebarImg = styled.img`
  height:20vh;
  position:fixed;
  top: 15%;
  z-index: ${z_index};
  transition: ${transitionTime};

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
            style={showSidebar ? {left:openwidth} : {left:closewidth}}>
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
          style={props.showSidebar === true ? {width:openwidth} : {width:closewidth}}
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