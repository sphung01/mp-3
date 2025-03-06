import { styled } from "styled-components"
import { Route, Routes } from "react-router-dom";
import AboutMe from "../pagecomponents/AboutMe"
import Education from "../pagecomponents/Education"
import Experience from "../pagecomponents/Experience"
import SkillsAndInterests from "../pagecomponents/SkillsAndInterests"
import Projects from "../pagecomponents/Projects"
import Contacts from "../pagecomponents/Contacts"

const MainContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150vh;
    font-size: calc(2px + 1.5vw);
    background-color: lightgreen;
`;

export default function Main(){
    return(
        <MainContainerDiv>
            <Routes>
              <Route path="/*" element={<AboutMe />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/SkillsAndInterests" element={<SkillsAndInterests />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contacts" element={<Contacts />} />
            </Routes>
        </MainContainerDiv>
    );
}