import React from "react"
import styled from "styled-components"
import ContributorCard from "./ContributorCard"
import SectionTitle from "../SmallSectionTitle";

{/* when updating this: put active members first, inactive after */}
const contributors = [ 
    {name: "Joshua Chandiramani",
    position: "Active, Head of Curriculum",
    linkedin: "https://www.linkedin.com/in/joshua-chandiramani/",
    status: "active"
    },
    {name: "Austin Ho",
    position: "Active, Head of Web",
    linkedin: "https://www.linkedin.com/in/aho1628/",
    status: "active"
    },   
    {name: "Eddie Liu",
    position: "Active, Head of Marketing",
    linkedin: "https://www.linkedin.com/in/efliu/",
    status: "active"
    },
    {name: "Danielle Wong",
    position: "Active, Course Developer, Web",
    linkedin: "https://www.linkedin.com/in/danielle-n-wong/",
    status: "active"
    },
    {name: "Melissa Wong",
    position: "Inactive, Head E-Learning Developer, Web",
    linkedin: "https://www.linkedin.com/in/melissa-r-wong/",
    status: "inactive"
    }, 
    {name: "Leah Hong",
    position: "Inactive, Course Developer, Web",
    linkedin: "https://www.linkedin.com/in/leah-hong/",
    status: "inactive"
    },   
    {name: "Hrishikesh Ingale",
    position: "Inactive, Course Developer, Web",
    linkedin: "https://www.linkedin.com/in/hrishikesh-ingale/",
    status: "inactive"
    },   
    {name: "Arda Ulug",
    position: "Inactive, Course Developer, Curriculum",
    linkedin: "https://www.linkedin.com/in/ardaulug/",
    status: "inactive"
    },  
    {name: "Kaito Garcia",
    position: "Inactive, Course Developer, Curriculum",
    linkedin: "https://www.linkedin.com/in/kaitogarcia/ ",
    status: "inactive"
    },  
    {name: "Shannon Zhong",
    position: "Inactive, Course Developer, Curriculum",
    // linkedin: "/",
    status: "inactive"
    },  
    {name: "Sissi Li",
    position: "Inactive, Course Developer, Curriculum",
    linkedin: "https://www.linkedin.com/in/sissi-li-28061b1a2/",
    status: "inactive"
    }
]

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const OCTeamCards = () => (
    <> 
        <SectionTitle title="Our Team" color="light"></SectionTitle>
        <CardContainer> 
            {contributors.map((details) =>
                <>
                    <ContributorCard 
                        name={details.name}
                        position={details.position}
                        linkedin={details.linkedin}
                        status={details.status}
                    />
                </>
            )}
        </CardContainer>
    </>
)

export default OCTeamCards
