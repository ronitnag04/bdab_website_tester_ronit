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
                name="Aurum Kathuria"
                photoLink={execArr[0]}
                role="Co-President"
                interest1="Having Amazing Conversations"
                interest2="Optimizing Productivity"
                interest3="Self-Improvement"
                linkedin="http://www.linkedin.com/in/heyaurum"
            />
            <OfficerCard className="item-1"
                committee="exec"
                name="Ronak Laddha"
                photoLink={execArr[1]}
                role="Co-President"
                interest1="Cold Brew"
                interest2="Playing Soccer"
                interest3="Making Large Spotify Playlists"
                linkedin="https://www.linkedin.com/in/ronak-laddha/"
            />
            <OfficerCard className="item-2"
                committee="exec"
                name="Kendall Kikkawa"
                photoLink={execArr[2]}
                role="External Vice President"
                interest1="Basketball"
                interest2="Alternative Protein"
                interest3="Entrepreneurial & Sports Podcasts"
                linkedin="https://www.linkedin.com/in/kendallkikkawa/"
            />
            <OfficerCard className="item-3"
                committee="exec"
                name="Coco Sun"
                photoLink={execArr[3]}
                role="Internal Vice President"
                interest1="Traveling"
                interest2="Cooking"
                interest3="Doing adventurous things"
                linkedin="https://www.linkedin.com/in/cocosunl/"
            />
            <OfficerCard className="item-4"
                committee="exec"
                name="Izzie Lau"
                photoLink={execArr[4]}
                role="VP of Development"
                interest1="Design"
                interest2="Gaming & Twitch"
                interest3="EDM :,)"
                linkedin="https://www.linkedin.com/in/izzielau/"
            />
            <OfficerCard className="item-5"
                committee="exec"
                name="Rohil Kanwar"
                photoLink={execArr[5]}
                role="VP of Consulting"
                interest1="Puns"
                interest2="Cricket"
                interest3="Roasting Aurum"
                linkedin="https://www.linkedin.com/in/rohilkanwar/"
            />
            <OfficerCard className="item-6"
                committee="exec"
                name="Joseph Pang"
                photoLink={execArr[6]}
                role="VP of Education"
                interest1="Basketball & Volleyball"
                interest2="Trying different foods"
                interest3="Playing online games with friends"
                linkedin="https://www.linkedin.com/in/josephpang915/"
            />
        </CardContainer>
    </>
)

export default ExecBoardCards