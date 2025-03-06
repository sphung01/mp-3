import Image from "../images/me.png"
import { styled } from "styled-components"

const AboutMeDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
`;

const AboutMeTitleDiv = styled.h2`
    text-align: center;
    font-size: calc(20px + 2vw);
`;

const ImageDiv = styled.div`
    width: 100%;
    border-style: groove;
    border-color: Black;
    border-width: 5px;
    background-color: beige;
    text-align: center;

    @media screen and (max-width: 850px){
        text-align: center;
    }
`;

const MyPicture = styled.img`
    width: 75%;
`;

const ParagraphDiv = styled.div`
    margin: 0 1vw;
    font-size: calc(20px + 1.5vh);
    padding: 2% 2%;
`;

export default function AboutMe(){
    return(
        <AboutMeDiv>
            <AboutMeTitleDiv>About Me</AboutMeTitleDiv>
            <ImageDiv>
                <MyPicture src={Image} alt="Cartoon Character of Steven Phung"/>
            </ImageDiv>
            <ParagraphDiv>
                Hello and welcome to my website! My name is Steven Phung and
                I am an senior undergraduate student that's currently studying 
                Computer Science at Boston University. On my personal online resume,
                you can find all sorts of stuff about me! Stuff like my education,
                skills, or most importantly, my projects if you want to check out what
                I have been working on! Feel free to head to the contacts page if you
                have any questions and enjoy your time looking around!
            </ParagraphDiv>
        </AboutMeDiv>
    );
}