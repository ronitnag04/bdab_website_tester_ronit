import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {execArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const ExecBoardCards = () => (
    <>
        <CardContainer>
            <OfficerCard className="item-0"
                committee="exec"
                name="Sofia Kwee"
                photoLink={execArr[0]}
                role="Co-President"
                interest1="Trying new foods"
                interest2="Playing tennis"
                interest3="Playing with my dog"
                linkedin="https://www.linkedin.com/in/sofia-kwee-22274a198/"
            />
            <OfficerCard className="item-1"
                committee="exec"
                name="Arshia Singhani"
                photoLink={execArr[1]}
                role="Co-President"
                interest1="Strolls"
                interest2="Dance"
                interest3="Sunsets"
                linkedin="https://www.linkedin.com/in/arshia-singhani-b2a361133/"
            />
            <OfficerCard className="item-2"
                committee="exec"
                name="Erin Hong"
                photoLink={execArr[2]}
                role="VP of Development"
                interest1="Music"
                interest2="Running"
                interest3="Reading"
                linkedin="https://www.linkedin.com/in/erin-hong-054535203/"
            />
            <OfficerCard className="item-3"
                committee="exec"
                name="Lara Panigrahi"
                photoLink={execArr[3]}
                role="Internal Vice President"
                interest1="Weightlifting"
                interest2="Trying new cafes in Berkeley/SF"
                interest3="Dancing"
                linkedin="https://www.linkedin.com/in/lara-panigrahi-9570581b9/"
            />
            <OfficerCard className="item-4"
                committee="exec"
                name="Vinay Kanigicherla"
                photoLink={execArr[4]}
                role="VP of Consulting"
                interest1="Playing badminton and tennis"
                interest2="Listening to rap"
                interest3="Watching F1, MMA, and NFL"
                linkedin="https://www.linkedin.com/in/vinaykanigicherla/"
            />
            <OfficerCard className="item-5"
                committee="exec"
                name="Emily Holmes"
                photoLink={execArr[5]}
                role="VP of Education: Bootcamp"
                interest1="Playing mud volleyball"
                interest2="Baking pies"
                interest3="Watching reality TV with my roommates"
                linkedin="https://www.linkedin.com/in/emily--holmes/"
            />
            <OfficerCard className="item-6"
                committee="exec"
                name="Joshua Chandiramani"
                photoLink={execArr[6]}
                role="VP of Education: Online Course"
                interest1="Competitive tennis"
                interest2="Hip hop dance"
                interest3="YouTube Content Creation"
                linkedin="https://www.linkedin.com/in/joshua-chandiramani/"
            />
        </CardContainer>
    </>
)

export default ExecBoardCards
