import React, {useState} from "react";
import FilterCards from "./FilterCards";
import styled from "styled-components"

const userList = [
  {
    id: 1,
    name: "Executive Board",
  },
  {
    id: 2,
    name: "Projects",
  },
  {
    id: 3,
    name: "Education",
  },
  {
    id: 4,
    name: "Advisors",
  }
];

const CardContainer = styled.div`
  display: flex;
  top: 100%;
//   flex-direction: column;
  justify-content: center;
`

const Test = () => {
    const [selectedUserId, setSelectedUserID] = useState(null);

    function handleClick(id) {
        setSelectedUserID(id);
    };

    return userList.map(user => (
      <CardContainer key={user.id}>
        <FilterCards
          status={user.id === selectedUserId ? true : false}
          user={user}
          onChange={handleClick}
        >
          {user.name}
        </FilterCards>
      </CardContainer>
    ));
  }

export default Test;

