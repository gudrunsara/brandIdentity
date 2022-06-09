import styled from 'styled-components';

export const InterviewComparisonFlex = styled.div`
    display: flex;
    justify-content: center;
    margin: 200px 100px;


`;

export const InterviewSelect = styled.select`
    border: 2pt solid #D9D9D9;
    border-radius: 29px;
    width: 400px;
    padding: 6px 17px;
    margin: 10px;
    font-size: 20px;
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;

    font-size: 32px;
    font-family: "RoobertSemiBold";

    &:nth-child(1) {
      border: 2pt solid #CAA1FF;
  }
    
`;

export const Questions = styled.h1`
    text-align: center;
    font-size: 52px; 
    margin: 150px 450px;

`;

export const AnsweresWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 150px;
`;

export const AnsweresBox = styled.div`
  display: flex;
`;

export const Answer1Wrapper = styled.div`
    display: flex;
`;

export const Answer2Wrapper = styled.div`
    display: flex;
    position: relative;
    max-width: 600px;
`;

export const AnswerImage = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

export const Answer2Image = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: absolute;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;

export const AnswerText1 = styled.div`
  p {
    background-color: #CAA1FF;
    border-radius: 30px 30px 30px 0px;
    padding: 10px;
    margin: 20px 10px 0px 10px;
    color: white;
    font-size: 32px;
    max-width: 700px;
  }
`;

export const AnswerText2 = styled.div`
  background-color: #D9D9D9; 
  border-radius: 30px 30px 0px 30px;
  padding: 5px 10px;
  margin: 20px 85px 0px 10px;
  p {
    color: white;
    margin: 10px;
    font-size: 32px;
    max-width: 700px;
  }
`;



