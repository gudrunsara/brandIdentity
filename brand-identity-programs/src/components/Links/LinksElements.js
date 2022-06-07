import styled from 'styled-components';
import { Link } from 'react-router-dom'
import FooterImage from '../../images/footer-img.png';


export const FrontPageLinkComponentLinks = styled.div`
  margin-bottom: 200px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  `;


export const FrontPageLinkComponentZdroje = styled.div`
  color:red;
  background-image: url(${FooterImage});
  height: 640px;
  flex: 40%;
  border-radius: 30px;
`;

export const FrontPageLinkComponentLink = styled(Link)`
  color: white;
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