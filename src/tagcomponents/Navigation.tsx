import { styled } from "styled-components"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"

const NavigationDiv = styled.div`
    width: 30%;

    @media screen and (max-width: 850px){
        width: 100%;
    }
`;

const UnorderedList = styled.ul`
    display: flex;
    flex-direction: column;
    justiy-content: space-evenly;
    background-color: black;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;

    @media screen and (max-width: 850px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: black;
        list-style: none;
        padding-left: 0;
    }
`;

const ListItem = styled.li`
    font-size: calc(3px + 3vw);
    width: 90%;
    background-color: gray;
    padding: 2vh 0;
    margin: 5vh auto;
    border-radius: 15px;
    border-style: groove;
    border-color: limegreen;
    border-width: 4px;

    @media screen and (max-width: 850px){
        font-size: calc(10px + 1.5vw);
        background-color: gray;
        padding: 1% 1%;
        margin: 1% .5%;
        border-radius: 15px;
        border-style: groove;
        border-color: limegreen;
        border-width: 2px;
    }
`;

export default function Navigation(){

    const currentPath = useParams();
    let pathName = Object.values(currentPath).pop() || "";
    pathName = pathName.charAt(0).toUpperCase() + pathName.slice(1);
    useEffect(() => {
        if(pathName === ""){
            document.title = "About Me | Steven Phung's Resume";
        } else {
            document.title = pathName + " | Steven Phung's Resume";
        }
    }, [pathName])

    const linkStyles = {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: 'black',
        fontsize: 'calc(2px + 2vw)'
    };

    return(
        <NavigationDiv>
            <UnorderedList>
                <ListItem>
                    <Link to="/" style={linkStyles}>About Me</Link>
                </ListItem>
                <ListItem>
                    <Link to="/Education" style={linkStyles}>Education</Link>
                </ListItem>
                <ListItem>
                    <Link to="/Experience" style={linkStyles}>Experience</Link>
                </ListItem>
                <ListItem>
                    <Link to="/SkillsAndInterests" style={linkStyles}>Skills And Interests</Link>
                </ListItem>
                <ListItem>
                    <Link to="/Projects" style={linkStyles}>Projects</Link>
                </ListItem>
                <ListItem>
                    <Link to="/Contacts" style={linkStyles}>Contacts</Link>
                </ListItem>
            </UnorderedList>
        </NavigationDiv>
    );
}