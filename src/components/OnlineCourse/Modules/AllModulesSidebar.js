import React from 'react'
import styled from 'styled-components'

const transitionTime = '0.5s' 
const openwidth = 20
const closewidth = 0
const z_index = 5 

const SidebarContainer = styled.div`
    height:100%;
    width:${openwidth}vw;
    position:absolute;
    z-index: ${z_index};
    top: 10%;
    transition: ${transitionTime};
    background-color: #214667;
    overflow: hidden;
    padding:20px;

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
    padding-bottom: 30px;
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

const Title = styled.h1`
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 35px;
    color: white;
    padding-top:20px;
`

const Line = styled.hr`
    height:4px;
    border-width: 0px;
    background-color: white;
    
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
            style={showSidebar ? {left:`${openwidth}vw`} : {left:`${closewidth}vw`}}>
          </SidebarImg>
      </button>
    </div>
    
  )
}


const ModuleLink = ({moduleNum, title, currentPage}) => {
  return(
    <a href={`https://bd.berkeley.edu/online_course/modules/module_${moduleNum}`}>
      <LinkTitle
        style={currentPage? {fontWeight:800} : {fontWeight:500}}
      >
        Module {moduleNum}: {title}
      </LinkTitle>
    </a>
    
  )
}

const AllModulesSidebar = (props) => {
  return (
    <>
        <SidebarContainer
          style={props.showSidebar === true ? {left:'0vw'} : {left:`-${openwidth-closewidth}vw`}}
        >
          <Title>Modules</Title>
          <Line></Line>

          <ModuleLink 
              moduleNum= {0}
              title='Setting Up'
              currentPage={props.currentPage === 0}
          />
          <ModuleLink 
              moduleNum= {1}
              title='What is Data Science'
              currentPage={props.currentPage === 1}
          />
          <ModuleLink 
              moduleNum= {2}
              title='Python & Numpy'
              currentPage={props.currentPage === 2}
          />
          <ModuleLink 
              moduleNum= {3}
              title='Pandas'
              currentPage={props.currentPage === 3}
          />
          <ModuleLink 
              moduleNum= {4}
              title='Data Visualizations'
              currentPage={props.currentPage === 4}
          />
          <ModuleLink 
              moduleNum= {5}
              title='The Data Science Life Cycle'
              currentPage={props.currentPage === 5}
          />
          
          <ModuleLink 
              moduleNum= {6}
              title='Intro to Machine Learning'
              currentPage={props.currentPage === 6}
          />
          <ModuleLink 
              moduleNum= {7}
              title='Statistics in Data Science'
              currentPage={props.currentPage === 7}
          />
          <ModuleLink 
              moduleNum= {8}
              title='SQL'
              currentPage={props.currentPage === 8}
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