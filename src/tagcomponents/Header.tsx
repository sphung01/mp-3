import { styled } from "styled-components"

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: limegreen;
    text-align: left;
    font-size: 50px;

    @media screen and (max-width: 850px){
        font-size: 25px;
        align-items: center;
    }
`;

export default function Header(){
    return(
        <HeaderDiv>
            <h1>Steven Phung</h1>
            <p>Welcome To My Online resume</p>
        </HeaderDiv>
    );
}

