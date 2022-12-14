import React from "react"
import styled from "styled-components"
import ContributorCard from "./ContributorCard"
import SectionTitle from "../SmallSectionTitle";

{/* when updating this: put active members first, inactive after */}
const contributors = [ 
    {name: "Joshua Chandiramani",
    position: "Active, VP of Education",
    linkedin: "https://www.linkedin.com/in/joshua-chandiramani/",
    status: "active"
    },
    {name: "Kaito Garcia",
    position: "Active, Head of Curriculum",
    linkedin: "https://www.linkedin.com/in/kaitogarcia/ ",
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
    {name: "Arda Ulug",
    position: "Active, Course Developer, Web",
    linkedin: "https://www.linkedin.com/in/ardaulug/",
    status: "active"
    },
    {name: "Ronit Nagarapu",
    position: "Active, Course Developer, Web",
    linkedin: "https://www.linkedin.com/in/ronit-nagarapu",
    status: "active"
    },
    {name: "Sean She",
    position: "Active, Course Developer, Web",
    linkedin: "https://www.linkedin.com/in/sean-she",
    status: "active"
    },
    {name: "Nicole Ni",
    position: "Active, Course Developer, Curriculum",
    linkedin: "https://www.linkedin.com/in/qianni17/",
    status: "active"
    },
    {name: "Celine Choi",
    position: "Active, Course Developer, Curriculum",
    linkedin: "https://www.linkedin.com/in/celinejwchoi",
    status: "active"
    },
    {name: "Gokce Gozek",
    position: "Active, Course Developer, Curriculum",
    linkedin: "https://www.linkedin.com/in/ardaulug/",
    status: "active"
    },
    {name: "Shannon Zhong",
    position: "Active, Course Developer, Marketing",
    linkedin: "https://www.linkedin.com/in/ardaulug/",
    status: "active"
    },
    {name: "Karina Parikh",
    position: "Active, Course Developer, Marketing",
    linkedin: "https://www.linkedin.com/in/ardaulug/",
    status: "active"
    },
    {name: "Ryan Shah",
    position: "Active, Course Developer, Marketing",
    linkedin: "https://www.linkedin.com/in/ardaulug/",
    status: "active"
    },
    {name: "Cadence Hsu",
    position: "Active, Course Developer, Marketing",
    linkedin: "https://www.linkedin.com/in/ardaulug/",
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
