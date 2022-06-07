import styled from 'styled-components';
import { Link } from 'react-router-dom'
import FooterImage from '../../images/footer-img.png';

export const FrontPageLinkComponentLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 200px;
  `;

export const FrontPageLinkComponentProgramy = styled.div`
  background: #CAA1FF;
  border-radius: 30px;
  flex: 40%;
  margin-right: 10px;
  padding: 20px;
`;

export const FrontPageLinkComponentRozhovory = styled.div`
  background: #03C0A7;
  border-radius: 30px;
  flex: 40%;
  padding: 20px;
`;

export const FrontPageLinkComponentZdroje = styled.div`
  background-image: url(${FooterImage});
  height: 640px;
  width: 50%;
  border-radius: 30px;
  margin-right: 10px;
  margin-top: 30px;
`;


export const FrontPageLinkComponentLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const FrontPageLinkComponentLinkText = styled.h1`
margin: 0px 0px 20px 0px;
`;

export const FrontPageLinkComponentLinkTextLast = styled.h1`
margin: 0px 0px 20px 0px;
padding: 20px;
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