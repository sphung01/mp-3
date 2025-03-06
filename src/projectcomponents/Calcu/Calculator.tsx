import { useState } from "react"
import { styled } from "styled-components"

const CalculatorDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: myFont;
    border-style: groove;
    border-width: 5px;
    border-color: lightskyblue;
    padding: 5% 5%;
    background-color: gray;
    color: black;
    font-family: 'MyCustomFont';

    @media screen and (max-width: 850px){
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: calc(10px + 1.5vw);
        font-family: myFont;
        border-style: groove;
        border-width: 5px;
        border-color: lightskyblue;
        padding: 5% 5%;
        background-color: gray;
        color: black;
        font-family: 'MyCustomFont';
    }
`;

const CalcTitle = styled.h2`
    font-size: calc(40px + 1.5vw);
    margin-bottom: 20px;

    @media screen and (max-width: 850px){
        font-size: calc(40px + 1.5vw);
        margin-bottom: 20px;
    }
`;

const InputBox = styled.input`
    text-align: center;
    width: 50%;
    margin-left: 25%;
    font-size: 50px;
    font-family: 'MyCustomFont';

    @media screen and (max-width: 850px){
        text-align: center;
        width: 50%;
        margin-left: 25%;
        font-size: 50px;
        font-family: 'MyCustomFont';
    }
`;

const ButtonStyle = styled.button`
    margin: 3% 3%;
    width: 70px;
    height: 50px;
    border-style: groove;
    border-color: lightskyblue;
    border-width: 5px;
    font-size: 100%;
    font-family: 'MyCustomFont';
    text-align: center;
    background-color: whitesmoke;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }

    @media screen and (max-width: 850px){
        margin: 3% 3%;
        width: 25%;
        height: 50px;
        border-style: groove;
        border-color: lightskyblue;
        border-width: 5px;
        font-size: 150%;
        font-family: 'MyCustomFont';
        text-align: center;
        background-color: whitesmoke;
    }
`;

const ResultStyle = styled.h2<{ $answer:string }>`
    font-size: calc(80% + 1.5vh);
    color: ${ (props) => (Number(props.$answer) < 0) ? 'red' : 'black'}
`;



export default function Calculator() {
    const [firstNum, setFirstNum] = useState<string>("");
    const [secondNum, setSecondNum] = useState<string>("");
    const [result, setResult] = useState<string>("");

    function additionBtn() {
        if((firstNum == "") && (secondNum == "")) {
            setResult("Both of your inputs are empty");
        } 
        else if((firstNum == "") || (secondNum == "")) {
            setResult("One of your inputs are empty");
        }
        else {
            setResult(String(Number(firstNum) + Number(secondNum)));
        }
    }

    function subtractionBtn() {
        if((firstNum == "") && (secondNum == "")) {
            setResult("Both of your inputs are empty");
        } 
        else if((firstNum == "") || (secondNum == "")) {
            setResult("One of your inputs are empty");
        }
        else {
            setResult(String(Number(firstNum) - Number(secondNum)));
        }
    }

    function multiplicationBtn() {
        if((firstNum == "") && (secondNum == "")) {
            setResult("Both of your inputs are empty");
        } 
        else if((firstNum == "") || (secondNum == "")) {
            setResult("One of your inputs are empty");
        }
        else {
            setResult(String(Number(firstNum) * Number(secondNum)));
        }
    }

    function divisionBtn() {
        if((firstNum == "") && (secondNum == "")) {
            setResult("Both of your inputs are empty");
        } 
        else if((firstNum == "") || (secondNum == "")) {
            setResult("One of your inputs are empty");
        }
        else {
            setResult(String(Number(firstNum) / Number(secondNum)));
        }
    }

    function exponentBtn() {
        if((firstNum == "") && (secondNum == "")) {
            setResult("Both of your inputs are empty");
        } 
        else if((firstNum == "") || (secondNum == "")) {
            setResult("One of your inputs are empty");
        }
        else {
            let powerAnswer = 1;
            for(let i = 0; i < Number(secondNum); i++){
                powerAnswer = Number(firstNum) * powerAnswer; 
            }
            setResult(String(powerAnswer));
        }
    }

    function clearBtn() {
        setFirstNum("");
        setSecondNum("");
        setResult("");
    }

    

    return(
        <CalculatorDiv>
            <CalcTitle>Javascript Calculator</CalcTitle>
            <InputBox 
                value={firstNum}
                type="text"
                placeholder="First"
                onChange={ (e) => { setFirstNum(e.target.value) } }
            />
            <InputBox 
                value={secondNum}
                type="text"
                placeholder="Second"
                onChange={ (e) => { setSecondNum(e.target.value) } }
            />
            <div>
                <ButtonStyle onClick={additionBtn}>ADD</ButtonStyle>
                <ButtonStyle onClick={subtractionBtn}>SUB</ButtonStyle>
                <ButtonStyle onClick={multiplicationBtn}>MUL</ButtonStyle>
                <ButtonStyle onClick={divisionBtn}>DIV</ButtonStyle>
                <ButtonStyle onClick={exponentBtn}>POW</ButtonStyle>
                <ButtonStyle onClick={clearBtn}>CLEAR</ButtonStyle>
            </div>
            
            <ResultStyle $answer={result}>Answer: {result}</ResultStyle>
        </CalculatorDiv>
    );
}