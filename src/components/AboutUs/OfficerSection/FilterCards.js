import React, { useState } from "react";
import styled from "styled-components"
import SectionTitle from "../../SectionTitle";
import ExecBoardCards from "./ExecBoardCards"

const FilterContainer = styled.div`
  z-index: 1;
  display: flex;
  height: 100%;
  justify-content: center;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`

const FilterItem = styled.div`
  font-family: 'Bebas Neue', cursive;
  font-size : 23px;
  text-decoration: none;
  color: #414142;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  margin-top: 10px;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #414142;
    height: 0.004rem;
  }

  :hover {
    cursor: pointer;
    color: #414142;
    ::after {
      width: 100%;
  }
`
const clicked = {
  display: "inline-block",
  content: ".",
  background: "transparent",
  borderBottom: "1px solid #414142"
};

function FilterCards() {
  const [component, setComponent] = useState(null);
  const [selectedSomethingElse, setSelectedSomethingElse] = useState(false);
  const [isExec, setIsExec] = useState(true);
  const [isProj, setIsProj] = useState(false);
  const [isEdu, setIsEdu] = useState(false);
  const [isAdv, setIsAdv] = useState(false);

  const LoadComponent = async location => {
    const { default: component } = await import(`./${location}`);
    setComponent(component);
    setSelectedSomethingElse(true);
    if (location === "ExecBoardCards") { setIsExec(true); setIsProj(false); setIsEdu(false); setIsAdv(false); }
    if (location === "ProjectCards") { setIsExec(false); setIsProj(true); setIsEdu(false); setIsAdv(false); }
    if (location === "EducationCards") { setIsExec(false); setIsProj(false); setIsEdu(true); setIsAdv(false); }
    if (location === "AdvisorCards") { setIsExec(false); setIsProj(false); setIsEdu(false); setIsAdv(true); }
  };

  return (
    <>
        <SectionTitle title="Our Officers"></SectionTitle>
        <FilterContainer>
            <FilterItem style={isExec ? clicked : null} onClick={() => LoadComponent("ExecBoardCards")}>Executive Board</FilterItem>
            <FilterItem style={isProj ? clicked : null} onClick={() => LoadComponent("ProjectCards")}>Projects</FilterItem>
            <FilterItem style={isEdu ? clicked : null} onClick={() => LoadComponent("EducationCards")}>Education</FilterItem>
            <FilterItem style={isAdv ? clicked : null} onClick={() => LoadComponent("AdvisorCards")}>Advisors</FilterItem>
        </FilterContainer>
        {selectedSomethingElse ? component : <ExecBoardCards/>}
    </>
  );
}

export default FilterCards;