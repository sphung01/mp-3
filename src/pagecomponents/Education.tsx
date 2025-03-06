import { styled } from "styled-components"

const EducationDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
`;

const EducationTitleDiv = styled.h2`
    font-size: calc(20px + 2vw);
    text-align: center;
`;

const SchoolContainerDiv = styled.div`
    border-style: groove;
    border-color: black;
    border-width: 5px;
    background-color: lightskyblue;
    font-size: calc(20px + 1.5vh);
    padding: 2% 2%;
`;

export default function Education(){
    return(
        <EducationDiv>
            <EducationTitleDiv>Education</EducationTitleDiv>

            <SchoolContainerDiv>
                <h4>Boston University</h4>
                <ul>
                    <li><strong>Bachelor of Arts:</strong> Computer Science</li>
                    <li><strong>Expected Graduation:</strong> January 2026</li>
                    <li><strong>Student Organization Involvement: </strong> 
                        BU Board Game Club (2022 - 2023), 
                        BU Gaming Club (2021 - 2022), 
                        BU Game Design Club (2024)
                    </li>
                    <li><strong>Relevent Coursework: </strong>
                        Data Structures, 
                        Analysis of Algorithms, 
                        Software Engineering,
                        Artificial Intelligence,
                        Web Application Development
                    </li>
                </ul>
            </SchoolContainerDiv>

            <SchoolContainerDiv>
                <h4>Josiah Quincy Upper School</h4>
                    <ul>
                        <li>High School Diploma</li>
                        <li><strong>Graduated: </strong>June 2021</li>
                        <li><strong>Awards: </strong>BU Upward Bound Spirit Award (2020)</li>
                    </ul>
            </SchoolContainerDiv>

        </EducationDiv>
    )
}