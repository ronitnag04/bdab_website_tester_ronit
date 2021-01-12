import React, { useState } from "react"
import VisionSection from "./VisionSection"
import CommitteeSection from "./CommitteeSection"
import ClubValuesSection from "./ClubValuesSection"
import FilterCards from "./OfficerSection/FilterCards"

const AboutUsContent = () => {
    return (
        <>
            <VisionSection/>
            <CommitteeSection/>
            <ClubValuesSection/>
            <FilterCards/>
        </>
    )
}

export default AboutUsContent