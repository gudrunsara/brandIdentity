import React from 'react';
 import {
    FooterDiv,
    FooterColumn1,
    UnderLined,
    FooterImgDiv,
    FooterImg,
    FooterText
} from './FooterElements';
import footerGif from '../../images/gifs/footer-gif.gif';


const Footer = () => {
    return (
        <>
        <FooterDiv>
            <FooterColumn1>
                <FooterText>
                Autor: David Novák<br></br>
                Developmen:<br></br>
                Gudrun Örnolfsdottir<br></br>
                Roku: 2022<br></br>
                Stáž v ateliér<br></br>
                <br></br>
                Grafického designu<br></br>
                a nových médií<br></br>
                <UnderLined>UMPRUM</UnderLined><br></br>
                </FooterText>
            </FooterColumn1>
            <div>
                <FooterText>
                Poděkování: Petr Babák<br></br>
                Lukáš Kijonka<br></br>
                Martin Ponec<br></br>
                Lumír Kajnar<br></br>
                Filip Blažek<br></br>
                Bohdan Heblík<br></br>
                Marek Cimbálník<br></br>
                Markéta Steinert<br></br>
                Ondřej Brom<br></br>
                Marek Nedelka<br></br>
                Petr Krejzek<br></br>
                Lumír Kajnar<br></br>
                Aleš Najbrt<br></br>
                </FooterText>
            </div>
            <FooterImgDiv>
                <FooterImg src={footerGif} alt="Footer Image" />
            </FooterImgDiv>
        </FooterDiv>
        </>
    );
};
  
export default Footer;