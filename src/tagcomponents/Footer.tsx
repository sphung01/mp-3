import { styled } from "styled-components"
import { Link } from "react-router-dom";

const FooterDiv = styled.div`
    font-size: 30px;
    background-color: limegreen;

    @media screen and (max-width: 850px){
        background-color: limegreen;
        font-size: 20px;
    }
`;

export default function Footer(){
    return(
        <FooterDiv>
            <p>All Rights Reserved by Steven Phung: <Link to="">Credits</Link> &#169;</p>
        </FooterDiv>
    );
}