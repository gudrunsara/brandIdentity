import styled from 'styled-components';
import walking from '../../images/gifs/walking.gif'
import smurfs from '../../images/gifs/smurfs.gif'
import woman from '../../images/gifs/woman-drinking.gif'
import batman from '../../images/gifs/batman.gif'
import guy from '../../images/gifs/guy.gif'

import hitler from '../../images/gifs/hitler.gif'


export const FrontPageLinkComponentLinks = styled.div`
  margin-bottom: 200px;
  margin-top: 200px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 20px;
  `;


export const FrontPageLinkComponentZdroje = styled.div`
  color:red;
  height: 640px;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 40%;
  border-radius: 30px;

  &:nth-child(1) {
    background-image: url(${walking}) ;
  }
  &:nth-child(2) {
    background-image: url(${guy}) ;
  }
  &:nth-child(3) {
    background-image: url(${hitler}) ;
  }
  &:nth-child(4) {
    background-image: url(${smurfs}) ;
    background-size: cover;
  }
  &:nth-child(5) {
    background-image: url(${woman}) ;
  }
  &:nth-child(6) {
    background-image: url(${batman}) ;
  }
  &:nth-child(7) {
    background-image: url(${walking}) ;
  }
  &:nth-child(8) {
    background-image: url(${guy}) ;
  }
  &:nth-child(9) {
    background-image: url(${hitler}) ;
  }
  &:nth-child(10) {
    background-image: url(${smurfs}) ;
  }
  &:nth-child(11) {
    background-image: url(${woman}) ;
  }
  &:nth-child(12) {
    background-image: url(${batman}) ;
  }
`;

export const FrontPageLinkComponentLink = styled.a`
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