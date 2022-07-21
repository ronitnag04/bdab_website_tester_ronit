import React from "react";
import styled from "styled-components"
import SectionTitle from "../BigSectionTitle";

const faqs = [
    {question: "Is there a general membership program I can join?", 
    answer: "We do not offer a general membership program. All of our members are either part of our Education or Project Committee. We believe that all of our members should be working together to accomplish a shared set of goals, whether that be a client project or making sure our bootcamp succeeds!"
    },
    {question: "Can I be in both committees?", 
    answer: "You may only be on 1 committee per semester. However, you can apply to both. In the case where you are accepted into both, you may choose which committee to be in. In future semesters, if you want to switch between committees you will need to complete the external application process again."
    },
    {question: "What makes your Project Committee different from other consulting clubs?", 
    answer: "We aim to source projects that are not only exciting for our members, but also tackle a diverse array of data science-related fields. In addition to offering typical data analysis and machine learning related projects, we also give members a chance to take on more challenging topics like computer vision and NLP."
    },
    {question: "What makes your Education Committee different from other education clubs?", 
    answer: "We are the first UC Berkeley student organization to offer a targeted data science bootcamp for high school students. With our Big Data Bootcamp, members are given the unique opportunity to educate younger learners about the increasing importance of data science in industry."
    },
    {question: "What is Big Data’s club culture?", 
    answer: "Our friendly and growth-oriented club culture has allowed us to form tight-knit bonds with each other and accomplish amazing things! We are committed to uplifting and supporting each other, no matter what. Check out our Medium to learn more about how we stay close virtually!"
    },
    {question: "What is a drop-in infosession?", 
    answer: "A summarized version of our infosession, as it won’t cover as much content (it’s half the time). It is a space for you to ask any questions you may have about the club or just chat with some of our officers and members."
    },
    {question: "What are you looking for in an applicant and how should I prepare for my interview?", 
    answer: "We recommend that you come to one of our two infosessions (first is on 1/27 and second on 1/31) to learn the tips and tricks to recruitment! Check out our Facebook event for more detailed information on those events."
    },
    {question: "Are there are tips for the Meet & Greet portion of recruitment?", 
    answer: "We recommend you ask about member experiences to gain a better understanding of BDAB’s social culture and what the day-to-day involvement with the club is. Also, make an honest effort to speak to members of both committees, not just the one you’re applying to!"
    },
    {question: "What is the expected time commitment during the semester?",
    answer: "Your expected time commitment will depend on what committee and position you hold. Come to our infosessions to get a detailed breakdown!"
    }
];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: #fbfbfb;
    border: 40px solid #fbfbfb;
    width: 80%;
    border-radius: 25px;
    margin: 20px 20px 100px 20px;

    @media (max-width: 1000px) { width: 650px; }
    @media (max-width: 900px) { width: 550px; }
    @media (max-width: 700px) { width: 450px; }
    @media (max-width: 500px) { width: 350px; }
`

const Question = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 20px;
    color: #414142;
    letter-spacing: 0.4px;
    margin: 20px 20px 10px 20px;

    @media (max-width: 800px) { font-size: 17px; line-height: 19px; margin: 20px 20px 10px 10px;}
`

const Answer = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: medium;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #414142;
    letter-spacing: 0.4px;
    margin: 0px 0px 20px 20px;
    width: 95%;

    @media (max-width: 800px) { font-size: 12px; line-height: 15px; margin: 0px 0px 20px 10px;}
`

const Contact = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: semi-bold;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-transform: uppercase;
    color: #bdbec1;
    letter-spacing: 1px;
    margin: 20px 30px 20px 20px;

    @media (max-width: 500px) { font-size: 13px; line-height: 18px; }
`

const ApplyFAQ = () => {
  return (
    <>
        <SectionTitle title="FAQs"></SectionTitle>
        <Container>
            {faqs.map((faq) =>
                <>
                    <Question>{faq.question}</Question>
                    <Answer>{faq.answer}</Answer>
                </>
            )}
            <Contact>Questions? Email bigdata.berkeley@gmail.com or message us on social media!</Contact>
        </Container>

    </>
  )
}

export default ApplyFAQ;
