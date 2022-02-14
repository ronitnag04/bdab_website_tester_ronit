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
                name="Coco Sun"
                photoLink={execArr[0]}
                role="Co-President"
                interest1="Traveling"
                interest2="Cooking"
                interest3="Doing adventurous things"
                linkedin="https://www.linkedin.com/in/cocosunl/"
            />
            <OfficerCard className="item-1"
                committee="exec"
                name="Ben Kaliczak"
                photoLink={execArr[1]}
                role="Co-President"
                interest1="Deep Learning"
                interest2="Community Building"
                interest3="Metal Crafting"
                linkedin="https://www.linkedin.com/in/benjamin-kaliczak-939450174/"
            />
            <OfficerCard className="item-2"
                committee="exec"
                name="Sofia Kwee"
                photoLink={execArr[2]}
                role="VP of Development"
                interest1="Eating"
                interest2="Tennis"
                interest3="Running"
                linkedin="https://www.linkedin.com/in/sofia-kwee-22274a198/"
            />
            <OfficerCard className="item-3"
                committee="exec"
                name="Arshia Singhani"
                photoLink={execArr[3]}
                role="Internal Vice President"
                interest1="Dance"
                interest2="Coffee"
                interest3="Going Outside"
                linkedin="https://www.linkedin.com/in/arshia-singhani-b2a361133/"
            />
            <OfficerCard className="item-4"
                committee="exec"
                name="Vinay Kanigicherla"
                photoLink={execArr[4]}
                role="VP of Consulting"
                interest1="Watching Sports"
                interest2="Sleeping"
                interest3="Eating Chick-fil-A"
                linkedin="https://www.linkedin.com/in/vinaykanigicherla/"
            />
            <OfficerCard className="item-5"
                committee="exec"
                name="Varsha Madapoosi"
                photoLink={execArr[5]}
                role="Co-VP of Education"
                interest1="Walking Around Berkeley"
                interest2="Watching the Sunset"
                interest3="Candy Crush"
                linkedin="https://www.linkedin.com/in/varshamadapoosi/"
            />
            <OfficerCard className="item-6"
                committee="exec"
                name="Rishi Jain"
                photoLink={execArr[6]}
                role="Co-VP of Education"
                interest1="Dance"
                interest2="Making Fancy Drinks"
                interest3="Procrastinating on Homework"
                linkedin="https://www.linkedin.com/in/rishiraij/"
            />
        </CardContainer>
    </>
)

export default ExecBoardCards
