import { styled } from "styled-components"

const SkillsAndInterestsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
`;

const SkillsTitleDiv = styled.h2`
    font-size: calc(20px + 2vw);
    text-align: center;
`;

const SkillsDiv = styled.div`
    border-style: groove;
    border-color: black;
    border-width: 5px;
    background-color: lightskyblue;
    font-size: calc(20px + 1.5vh);
    padding: 2% 2%;
`;

const ParagraphDiv = styled.div`
    margin: 0 1vw;
    font-size: calc(20px + 2vw);
`;

export default function SkillsAndInterests(){
    return(
        <SkillsAndInterestsDiv>
            <SkillsTitleDiv>Skills And Interests</SkillsTitleDiv>
            <ParagraphDiv>
                Here you can check out my skills and interests that are relevent in my career
                of computer science!
            </ParagraphDiv>

            <SkillsDiv>
                <h4>Programming Languages</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>MATLAB</li>
                </ul>
            </SkillsDiv>

            <SkillsDiv>
                <h4>Technical Skills</h4>
                <ul>
                    <li>Visual Code Studios</li>
                    <li>Terminal</li>
                    <li>Unity Engine</li>
                </ul>
            </SkillsDiv>

            <SkillsDiv>
                <h4>Languages</h4>
                <ul>
                    <li>Japanese (Basic)</li>
                    <li>Cantonese</li>
                </ul>
            </SkillsDiv>

        </SkillsAndInterestsDiv>
    )
}