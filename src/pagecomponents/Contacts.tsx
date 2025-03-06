import Image from "../images/me2.png"
import { styled } from "styled-components"

const ContactsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
`;

const ContactsTitleDiv = styled.h2`
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

const TableDiv = styled.table`
    border-style: groove;
    border-width: 4px;
    background-color: lightskyblue;
    border-color: black;
    text-align: left;
    font-size: calc(20px + .5vw);
    margin: 0 auto;
    width: 100%;
`;

const TableHeaderStyle = styled.th`
    border-style: groove;
    border-width: 4px;
    background-color: lightskyblue;
    border-color: black;
    text-align: left;
    font-size: calc(20px + .5vw);
    margin: 0 auto;
    width: 100%;
`;

const TableDataStyle = styled.td`
    border-style: groove;
    border-width: 4px;
    background-color: lightskyblue;
    border-color: black;
    text-align: left;
    font-size: calc(20px + .5vw);
    margin: 0 auto;
    width: 100%;
`;

const ParagraphDiv = styled.div`
    margin: 0 1vw;
    font-size: calc(10px + 2vw);
`;

const MyPicture = styled.img`
    width: 75%;
`;



export default function Contacts(){
    return(
        <ContactsDiv>
            
            <ContactsTitleDiv>Contacts</ContactsTitleDiv>
            <ParagraphDiv>
                Feel feel to use the information below 
                if you have questions or want to work on 
                projects together!
            </ParagraphDiv>
            <TableDiv>
                <tr>
                    <TableHeaderStyle>Type of Contact</TableHeaderStyle>
                    <TableHeaderStyle>Information</TableHeaderStyle>
                </tr>
                <tr>
                    <TableDataStyle>Email</TableDataStyle>
                    <TableDataStyle>fakemail@gmail.com</TableDataStyle>
                </tr>
                <tr>
                    <TableDataStyle>Phone Number</TableDataStyle>
                    <TableDataStyle>123 - 456 - 789</TableDataStyle>
                </tr>
                <tr>
                    <TableDataStyle>GitHub</TableDataStyle>
                    <TableDataStyle>fakegit@github.com</TableDataStyle>
                </tr>
            </TableDiv>
            <ImageDiv>
                <MyPicture src={Image} alt="Cartoon Version of Steven Phung"/>
            </ImageDiv>

        </ContactsDiv>
    )
}