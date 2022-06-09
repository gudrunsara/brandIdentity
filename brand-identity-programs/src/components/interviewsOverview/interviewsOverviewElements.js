import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const PageTitle = styled.h1`
text-align: center;
font-size: 70px;
margin-top: 200px;
margin-bottom: 200px;
`;

export const FrontPageLinkComponentLinks = styled.div`
  margin-bottom: 200px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 20px;
  `;

export const FrontPageLinkComponentProgramy = styled.div`
  background: #CAA1FF;
  border-radius: 30px;
  flex: 40%;
  padding: 20px;
  position: relative;
`;

export const FrontPageLinkComponentRozhovory = styled.div`
  background: #03C0A7;
  border-radius: 30px;
  flex: 40%;
  padding: 20px;
  position: relative;
`;

export const FrontPageLinkComponentZdroje = styled.div`
  background: #D9D9D9;
  border-radius: 30px;
  flex: 40%;
  padding: 20px;
  position: relative;
`;


export const FrontPageLinkComponentLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const FrontPageLinkComponentLinkText = styled.h1`
margin: 0px 0px 20px 0px;
`;

export const FrontPageLinkComponentImg = styled.img`
    width: 100%;
    border-radius: 30px;
    background: url(../../images/footer-img.png) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
    background-size: cover;
`;

export const OnHoverText = styled.p`
    position: absolute;
    color: black;
    z-index: 10;
    display: none;
    top: 62px;
    padding-right: 20px;
    font-size: 32px;
`;
