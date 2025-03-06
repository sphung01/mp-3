import { styled } from "styled-components"
import Calculator from "../projectcomponents/Calcu/Calculator";

const ProjectsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
`;

const ProjectsTitleDiv = styled.h2`
    text-align: center;

    @media screen and (max-width: 850px){
        font-size: calc(10px + 2vw);
    }
`;

const ProjectContainer = styled.div`
    border-style: groove;
    border-color: black;
    border-width: 5px;
    background-color: lightskyblue;
    font-size: calc(15px + 1.5vh);
    padding: 2% 2%;

    @media screen and (max-width: 850px){
        font-size: calc(10px + 2vw);
        padding: 2% 2%;
    }
`;

export default function Projects(){
    return(
        <ProjectsDiv>
            <ProjectsTitleDiv>Personal Projects</ProjectsTitleDiv>


            <ProjectContainer>
                <h3>Cookie Clicker</h3>
                <p>
                    Yeah? Remember this game? This used to be one of the popular mobile apps
                    to play when you are bored! Very addicting too! Game is simple. Just tap or click
                    on the cookie to earn more cookies. Once you have enough, you
                    can buy power-ups! There is only one sadly.
                </p>
            </ProjectContainer>

            <ProjectContainer>
                <h3>Number Counter</h3>
                <p>
                    In this project, I created a Number Counter program! This is helpful for people
                    that have short term memory and allows them to not lose count. Such as keeping count
                    on number of coins, progress in video games, or teach children how to count.
                </p>
            </ProjectContainer>

            <ProjectContainer>
                <h3>Rock, Paper, Scissors!</h3>
                <p>
                    All of us have played this when we were kids. This game helps us decide
                    who gets to go first, depending on what activity it is. The rules are straight-forward.
                    Rock beats Scissors. Scissors beat Paper. Paper beats Rock. Try your best to
                    predict on what the CPU will throw out!
                </p>
            </ProjectContainer>

            <ProjectContainer>
                <h3>JavaScript Calculator</h3>
                <p>
                    Need a calculator? Don't worry! This website has one right here!
                    Simply put in 2 of your inputs and press one of the buttons. It'll do
                    the math for you! We have addition, subtraction, multiplication, division, and power!
                    Here is an example: If you want to add two numbers, it will go in this order of 
                    "First Number + Second Number". Same for the rest of the operations.
                </p>
            </ProjectContainer>

            <Calculator />


        </ProjectsDiv>
    );
}