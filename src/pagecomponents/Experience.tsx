import { styled } from "styled-components"


const ExperienceDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
`;

const ExperienceTitleDiv = styled.h2`
    font-size: calc(20px + 2vw);
    text-align: center;
`;

const ExpContainer = styled.div`
    border-style: groove;
    border-color: black;
    border-width: 5px;
    background-color: lightskyblue;
    font-size: calc(20px + 1.5vh);
    padding: 2% 2%;
`;

export default function Experience(){
    return(
        <ExperienceDiv>
            <ExperienceTitleDiv>Experience</ExperienceTitleDiv>

            <ExpContainer>
                <h4>TRIO Upward Bound | <i>June 2023 - Present</i></h4>
                <ul>
                    <li>Academic Tutor-Mentor</li>
                    <li>
                        Assisted 80+ first-generation and low-income high
                        school students with Computer Science and Math through
                        private groups and 1-on-1 sessions
                    </li>
                    <li>
                        Prepared students how to communicate in real-world 
                        experiences and how to build a healthy lifestyle
                    </li>
                    <li>
                        Provided academic guidance through instructing work and time management
                    </li>
                </ul>
            </ExpContainer>

            <ExpContainer>
                <h4>Smithsonian Digital Transcription | <i>January 2022 - October 2023</i></h4>
                <ul>
                    <li>Volunteer</li>
                    <li>
                        Transcribed by reading through 226 pages, 
                        including 81 reviewed, throughout 45 projects (Harvard-Smithsonian
                        Center for Astrophysics and Archives of American Art)
                    </li>
                </ul>
            </ExpContainer>
            
        </ExperienceDiv>
    );
}