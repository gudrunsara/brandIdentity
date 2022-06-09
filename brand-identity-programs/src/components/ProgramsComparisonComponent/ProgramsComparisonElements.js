import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const PageTitle = styled.h1`
    text-align: center;
    font-size: 70px;
    margin-top: 200px;
    margin-bottom: 200px;
`;

export const ProgramsComparisonFlex = styled.div`
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 70px;

  div {
    flex: 1;
    padding: 13px;
  }

  h3 {
    margin-top: 70px;
    font-size: 32px;
  }
  h2 {
    font-size: 39px;
  }
  p {
    font-family: "RoobertLight";
  }
  

  `;

  export const TitleH2Strong = styled.h2`
    display: inline-block;
  `;

  export const LightH2 = styled.h2`
    font-family: "RoobertLight";
    display: inline-block;
    font-size: 24px;
  `;

  export const ProgramsComparisonHeaderImg = styled.img`
    width: 100%;
  `;

  export const ProgramsComparisonWrapper = styled.div`
    margin: 0px 500px;
  `;

  export const HeaderH2 = styled.h2`
    margin: 13px;
    font-size: 39px;
  `;
  
export const ExSign = styled.img`
  width: 67px;
  margin-top: 16px;
`;

export const LanguageIcon = styled.img`
  width: 150px;
`;

// Header images:

export const PurpleDiv = styled.div`
  background: #CAA1FF;
  border-radius: 9px;
  flex: 40%;
  margin-right: 10px;
  padding: 20px;
`;

export const GreenDiv = styled.div`
  background: #03C0A7;
  border-radius: 9px;
  flex: 40%;
  padding: 20px;
`;

export const GrayDiv = styled.div`
  background: #D9D9D9;
  border-radius: 9px;
  flex: 40%;
  padding: 20px;
`;

export const FrontPageLinkComponentLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const LinkText = styled.h2`
margin: 0px 0px 20px 0px;
font-size: 24px;
`;

export const FrontPageLinkComponentLinkTextLast = styled.h1`
margin: 0px 0px 20px 0px;
padding: 20px;
`;


export const DivisionLine = styled.hr`
  background-color: #EAEAEA;
  height: 0.1px;
  margin: 0px 13px;
  margin-bottom: 20px;
`;


