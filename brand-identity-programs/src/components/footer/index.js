import React from 'react';
 import {
//   Nav,
//   NavLink,
//   NavMenu,
//   NavBtn,
    FooterDiv,
    FooterColumn1,
    UnderLined,
    FooterImgDiv,
    FooterImg
} from './FooterElements';
import footerImage from '../../images/footer-img.png';


const Footer = () => {
    return (
        <>
        <FooterDiv>
            <FooterColumn1>
                <p>
                Autor: David Novák<br></br>
                Developmen:<br></br>
                Gudrun Örnolfsdottir<br></br>
                Roku: 2022<br></br>
                Stáž v ateliér<br></br>
                <br></br>
                Grafického designu<br></br>
                a nových médií<br></br>
                <UnderLined>UMPRUM</UnderLined><br></br>
                </p>
            </FooterColumn1>
            <div>
                <p>
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
                </p>
            </div>
            <FooterImgDiv>
                <FooterImg src={footerImage} alt="Footer Image" />;
            </FooterImgDiv>
        </FooterDiv>
        </>
    );
};
  
export default Footer;